function Sidebar() {
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark vh-100" style={{ width: "250px" }}>
            <a
                href="#"
                className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
                <span className="fs-4">My Sidebar</span>
            </a>

            <hr />

            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <a href="#" className="nav-link active" aria-current="page">
                        Home
                    </a>
                </li>

                <li>
                    <a href="#" className="nav-link text-white">
                        Dashboard
                    </a>
                </li>

                <li>
                    <a href="#" className="nav-link text-white">
                        Orders
                    </a>
                </li>

                <li>
                    <a href="#" className="nav-link text-white">
                        Products
                    </a>
                </li>

                <li>
                    <a href="#" className="nav-link text-white">
                        Customers
                    </a>
                </li>
            </ul>

            <hr />

            <a href="#" className="text-white text-decoration-none">
                Profile
            </a>
        </div>
    );
}

export default Sidebar;