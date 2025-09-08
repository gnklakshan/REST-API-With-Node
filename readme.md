# Node.js + TypeScript Backend Setup

This guide explains how to configure a Node.js backend project with TypeScript, including development tools for a smooth workflow.

## 1. Initialize the Project

```
npm init -y
```

## 2. Install Dependencies

Install TypeScript and development tools:

```
npm install --save-dev typescript ts-node ts-node-dev nodemon
```

## 3. Configure TypeScript

Create a `tsconfig.json` file:

```
{
  "compilerOptions": {
    "module": "nodenext",
    "moduleResolution": "node",
    "baseUrl": "src",
    "outDir": "dist",
    "sourceMap": true,
    "noImplicitAny": true
  },
  "include": ["src/**/*"]
}
```

## 4. Configure Nodemon

Create a `nodemon.json` file:

```
{
  "watch": ["src"],
  "ext": "ts,json",
  "exec": "ts-node ./src/index.ts"
}
```

## 5. Project Structure

```
project-root/
├── src/
│   └── index.ts
├── package.json
├── tsconfig.json
├── nodemon.json
└── readme.md
```

## 6. Add Scripts to `package.json`

Add the following scripts:

```
"scripts": {
  "start": "nodemon",
  "dev": "ts-node-dev src/index.ts"
}
```

## 7. Start the Development Server

- For hot-reloading with Nodemon:
  ```
  npm start
  ```
- For fast reload with ts-node-dev:
  ```
  npm run dev
  ```

## 8. Example Entry File

`src/index.ts`:

```
console.log('Hello, TypeScript Node.js backend!');
```

---

**You are now ready to develop your Node.js backend with TypeScript!**
