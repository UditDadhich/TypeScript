import { useState } from "react"

interface OrderFormProps {
    onSubmit(order: {name: string; cups: number}): void
}

export function OrderForm({onSubmit}: OrderFormProps) {
    const [name, setName] = useState("Masala")
    const [cups , setCups] = useState(1)
    return (
        <div>Order Form</div>
    )
}