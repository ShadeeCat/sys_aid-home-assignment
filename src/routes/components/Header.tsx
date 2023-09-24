import * as React from "react"
import { Link } from "react-router-dom"

export const Header = () => <div>
    <Link to="/">Calculator</Link>
    <Link to="history">History</Link>
    <span>Logged in Username</span>
</div>
