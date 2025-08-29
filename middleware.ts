// import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// const isPrivateRoute = createRouteMatcher(["/dashboard(.*)?"])

// export default clerkMiddleware(async (auth, request) => {
//   if (isPrivateRoute(request)) {
//     await auth.protect()
//   }
// })


import { clerkMiddleware } from '@clerk/nextjs/server';

// ✅ Middleware runs, but does nothing — effectively bypassing auth
export default clerkMiddleware(async (auth, request) => {
  // Auth check disabled
  // await auth.protect(); // <-- disabled
});


export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}