# Students WebApp and PWA
This is a students registration application developed for learning purposes.It covers all conventional functionalities. It has been developed with Next.js using a combination of server and client side rendering and also implementing server actions. It has been deployed in Vercel.

## Demo site:
https://www.ademo.live <br/>
(Register and log in to have full access)

## Functionality
- Navigation without authentication.
- Restricted views.
- Registration and login.
- Add, edit and delete user profiles and students.
- Add students images
- Error handling in forms.
- Responsive for web and mobile
- It has Progressive Web App capabilities, so it can be installed on desktop and mobile.

## Stack and libraries
- TS / Next.js 14 / React
- next-auth for authentication handling
- react-hook-form (useForm)
- MongoDB and mongoose 
- uploadthing for images storage
- Tailwind and flowbite for UI


## Preview
![Login page](/readmeAssets/login.png)
![Registration page](/readmeAssets/registration.png)
![Dashboard page](/readmeAssets/studentsView.png)
![Students page](/readmeAssets/studentsEdit.png)


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
