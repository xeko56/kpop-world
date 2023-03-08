
import React, { useState } from "react";
import { Button } from 'primereact/button';

export default function ButtonPage() {
    const [loading, setLoading] = useState(false);

    const load = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 200);
    };

    return (
        <div className="card flex flex-wrap justify-content-center gap-3">
            <Button onClick={Log} label="Submit" icon="pi pi-check" iconPos="right" />
        </div>
    )
}
        