# Валидация

На курсе "JavaScript. Профессиональная разработка веб-интерфейсов" вы использовали для валидации форм библиотеку **PristineJS**, на курсах "JavaScript. Архитектура клиентских приложений" и "React. Разработка сложных клиентских приложений" реализовывали валидацию самостоятельно. Здесь, в грейдировании, мы смешаем оба подхода – реализуем валидации с помощью [**React Hook Form**](https://react-hook-form.com/).

Библиотека вам не знакома, поэтому разберём основные возможности на сравнении с **PristineJS**. Для примера завалидируем форму входа:

```html
<form>
    <p>
        <label>Эл.почта:</label>
        <br />
        <input type="email" />
    </p>
    <p>
        <label>Пароль:</label>
        <br />
        <input type="password" />
    </p>
    <p>
        <label>
            <input type="checkbox" />
            Запомнить меня
        </label>
    </p>
    <button>Войти</button>
</form>
```

В случае с **PristineJS** будет достаточно расставить верно атрибуты в HTML:

```html
<form class="login-form">
    <p>
        <label>Эл.почта:</label>
        <br />
        <input type="email" name="email" required />
    </p>
    <p>
        <label>Пароль:</label>
        <br />
        <input type="password" name="password" required />
    </p>
    <p>
        <label>
            <input type="checkbox" name="remember" />
            Запомнить меня
        </label>
    </p>
    <button>Войти</button>
</form>
```

И "скормить" форму библиотеке:

```js
const form = document.querySelector(".login-form");

const pristine = new Pristine(form);

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    
    if (pristine.validate()) {
        // ....
    }
});
```

В случае с **React Hook Form** принцип действия похожий, только всё происходит в одном файле, в JSX:

```jsx
import { useForm } from 'react-hook-form';

export default function Form() {
  const onSubmit = (evt) => evt.preventDefault();

  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>
        <label>Эл.почта:</label>
        <br />
        <input type="email" {...register("userEmail", { required: true })} />
      </p>
      <p>
        <label>Пароль:</label>
        <br />
        <input type="password" {...register("userPassword", { required: true })} />
      </p>
      <p>
        <label>
          <input type="checkbox" />
          Запомнить меня
        </label>
      </p>
      <button>Войти</button>
    </form>
  );
}
```

Обратите внимание на разницу, вместо передачи библиотеке формы целиком `const pristine = new Pristine(form);` мы передаём каждое отдельное поле, используя функцию `register()` из хука `useForm()` – `<input type="email" {...register("userEmail", { required: true })} />`.

В `register()` первым аргументом нужно передать уникальное имя, тот же атрибут `name`. Вторым аргументом можно передать объект с параметрами валидации, один в один [как в штатных HTML-валидациях](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation). Мы передаем `required: true` потому как поля почта и пароль у нас обязательные.

А вместо проверки `if (pristine.validate())` в обработчике события `submit`, мы передаём наш обработчик отправки в функцию `handleSubmit()` – `<form onSubmit={handleSubmit(onSubmit)}>`. **React Hook Form** сама вызовет его, если форма будет валидна.

В отличии от в нет штатных классов для ошибок, поэтому и стилизацией, и даже вывовдом ошибок вам нужно будет управлять самостоятельно:

```diff
- const { register, handleSubmit } = useForm();
+ const { register, handleSubmit, formState: { errors } } = useForm();

return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <p>
            <label>Эл.почта:</label>
            <br />
            <input
                type="email"
                {...register("userEmail", { required: true })}
+                aria-invalid={errors.userEmail ? "true" : "false"}
            />
+            {errors.userEmail?.type === 'required' && <><br/><span role="alert">"Укажите почту"</span></>}
        </p>
```

Причем код можно слегка упростить, если текст ошибки хранить сразу в `register()`:

```diff
return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <p>
            <label>Эл.почта:</label>
            <br />
            <input
                type="email"
-                {...register("userEmail", { required: true })}
+                {...register("userEmail", { required: "Укажите почту" })}
                aria-invalid={errors.userEmail ? "true" : "false"}
            />
-            {errors.userEmail?.type === 'required' && <><br/><span role="alert">"Укажите почту"</span></>}
+            {errors.userEmail && <><br/><span role="alert">{errors.userEmail?.message}</span></>}
        </p>
```

А что если возможностей [штатных HTML-валидаций](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation) не хватает? В функцию `register()` в объект с параметрами валидации можно передать поле `validate` и описать там все необходимые проверки.

**PristineJS**:

```js
const form = document.querySelector(".login-form");
const mail = form.querySelector("input[type=\"email\"]");

const pristine = new Pristine(form);

const checkMagicEmail = (value) => { ... };

pristine.addValidator(mail, checkMagicEmail, "Укажите волшебную почту");
```

**React Hook Form**:

```jsx
const checkMagicEmail = (value) => { ... };

<input
    type="password"
    {...register(
        "userPassword",
        {
            required: "Укажите волшебную почту",
            validate: {
                checkMagicEmail
            }
        }
    )}
/>
```

Существует другой способ – [валидация по схеме](https://react-hook-form.com/get-started#SchemaValidation) – но в вашем проекте он не пригодится. Как и прочие сложные вещи из **React Hook Form**. Однако вы всегда можете ознакомиться с ними в качестве доп.нагрузки [в документации](https://react-hook-form.com/api).
