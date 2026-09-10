import prisma from "./prisma.js";

const init = async () => {

    console.log("Connecting and querying Supabase...");
    
    // 1. First letter lowercased ('cart') as mapped from 'model Cart'
    // 2. Bound inside an async function so 'await' can resolve the promise
    const data = await prisma.cart.findMany();
    
    console.log("Successfully fetched carts:", data);

  
};

init();
