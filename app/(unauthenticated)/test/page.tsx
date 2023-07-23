"use client";

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"




export default function Test() {

  const [error, setError] = useState(null);
  const [resp, setResp] = useState(0);
  const { toast } = useToast()


  useEffect(() => {
    fetch( "https://api-testnet.dock.io" + "/jobs/9810", {
      headers: {
        "DOCK-API-TOKEN" : ""
    }})
        .then(res => res.json())
        .then(
            (data) => {                
                setResp(data);
                toast({
                  title: "result",
                  description: JSON.stringify(data),
                })
            },
            (error) => {                
                setError(error);
            }
        )
  }, [])

  return (
    <div>
      <Button>Click me</Button>
    </div>
  )


}