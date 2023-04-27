const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? "http://localhost:3000" : "https://funding-application-v15hnu24.vercel.app"