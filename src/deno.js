import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

const file = await Deno.readFile(".");

serve(async () => new Response(file));
