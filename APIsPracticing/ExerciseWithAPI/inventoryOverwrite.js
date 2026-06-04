// 🎟️ Ticket #5: The Inventory Overwrite (Focus: PUT)
// Context: Our warehouse manager made massive edits to a product listing (changed the name, price, description, and stock).
//  We need to completely overwrite the old product record in the database with the new one.

async function overwriteProduct(productId, newProductObject,adminToken){
    try {
        const response = await fetch(`https://api.ourstartup.com/v1/inventory/${productId}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${adminToken}`
            },
            body:JSON.stringify(newProductObject)
        });
        if(response.status===401){
            throw new Error("Unauthorized: Invalid or missing token.");
        }
        if(!response.ok){
            throw new Error(`Failed to overwrite product. Status: ${response.status}`);
        }

        const updatedProduct=await response.json();
        console.log("Product overwritten successfully:", updatedProduct);
        return updatedProduct;

    } catch (error) {
        console.error("Error overwriting product:",error.message);
        return null; // Return null or you could throw the error again depending on your needs
    }
}