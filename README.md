https://caidam.github.io/datastats-react-clone/

### React + Vite

```bash
npm create vite@latest

npm i

npm run dev
```


```bash
npm install react-icons
```


# Deploying Vite / React App to GitHub Pages
[source](https://dev.to/rashidshamloo/deploying-vite-react-app-to-github-pages-35hf)

This is a step-by-step tutorial on how to deploy a Vite / React application to GitHub Pages.

## Prerequisites
`Node.js` and `npm` installed on your machine
A Vite / React application
A GitHub account

## Steps
Install the `gh-pages` package Open the terminal in VS Code (use ctrl+~) and run the following command:
```bash
npm install gh-pages --save-dev
```

Update the package.json file Add the following lines before `"build": "vite build",`:
```
"predeploy": "npm run build",
"deploy": "gh-pages -d dist",
```

Update the `vite.config.js` file Add the following line before plugins: `[react()],`:
```
base: "/YOUR_REPOSITORY_NAME",
```

Replace YOUR_REPOSITORY_NAME with the name of your GitHub repository.

Deploy your application In the terminal, run the following command:
```
npm run deploy
```

Congratulations! 🎉 You now have a gh-pages branch in your repository and your app is deployed. You can check it under Settings -> Pages in your GitHub repository.

## Updating Your Deployment
To update your app deployment, just run the `npm run deploy` command again.