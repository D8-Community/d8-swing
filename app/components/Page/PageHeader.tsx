export function PageHeader() {
    return (
        <div className="container">
            <div className="page-header-content">
                <div className="page-header-inner">
                    <div className="page-title">
                        <h2>TITLE</h2>
                    </div>
                    <ol className="breadcrumb">
                        <li><a href="index.html">Home</a></li>
                        <li className="active">Members</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}