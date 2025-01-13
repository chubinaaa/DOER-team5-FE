import React from "react";

import { doLogout } from "../../../utils/auth/action";
import { Button } from "../ui/button";

const LogOut = () => {
    return (
        <form action={doLogout}>
            <Button type="submit">Log Out</Button>
        </form>
    );
};

export default LogOut;
