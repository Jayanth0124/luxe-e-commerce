import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    if (req.method !== "POST") {
      throw new Error("Method not allowed");
    }

    const { cart, customerInfo, totalPrice } = await req.json();

    // Format order message
    const orderItems = cart
      .map((item: any) => `• ${item.title} x${item.quantity} (₹${item.price * item.quantity})`)
      .join("\n");

    const message = `*New Order from Caramel Luxe*\n\n` +
      `*Order Details:*\n${orderItems}\n\n` +
      `*Total: ₹${totalPrice}*\n\n` +
      `*Customer Info:*\n` +
      `Name: ${customerInfo.fullName}\n` +
      `Contact: ${customerInfo.contactNumber}\n` +
      `Email: ${customerInfo.email || "N/A"}\n` +
      `Address: ${customerInfo.address}\n\n` +
      `Hello, I want to order these items. Please confirm my order.`;

    // Store order temporarily (In a real app, you'd save to DB)
    // For this demo, we just return the formatted message
    
    return new Response(
      JSON.stringify({ 
        success: true, 
        message, 
        whatsappUrl: `https://wa.me/919876543210?text=${encodeURIComponent(message)}` 
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 400,
    });
  }
});
