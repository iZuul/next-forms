# Handling and Send Form Request in Next 14

## Concept

In Next 14 we can send form reqest with some ways:

- Standard handing with `onSubmit` and `ajax` request, can use [`Fetch API`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), or [`Axios`](https://axios-http.com/docs/intro)
- Combining standard handling with Form Library like [`Formik`](https://formik.org/) or [`react-hook-form`](https://react-hook-form.com/)
- using [`Server Action`](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations) only
- Combining **Server Action** with [`useFormState`](https://react.dev/reference/react-dom/hooks/useFormState) and [`useFormStatus`](https://react.dev/reference/react-dom/hooks/useFormStatus) another [link](https://nextjs.org/blog/next-14#forms-and-mutations)
- Combining **Server Action** with Form Library such as `react-hook-form`
- Combining **Server Action**, Form Library, `useFormState`, and `useFormStatus`

## Project

This project will showing demo for:

- Server Action Only
- Server Action + useFormState + useFormSatus
- Server Action + Library + useFormState + useFormSatus

## Notes

- if you use **Server Action** **`ONLY`** for handling form request it can be running even after the javascript is `disabled`
