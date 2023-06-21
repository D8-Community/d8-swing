export function MemberPageInfo() {
    return (
        <ul className="member-info mb-4">
            <li className="all-member">
                <p>All Members </p>
                <p>20 365 587</p>
            </li>
            <li className="member-cat">
                <div className="custom-select right w-100">
                    <select name="member" id="member-cat">
                        <option value="0">Newest Registerd</option>
                        <option value="1">Oldest</option>
                        <option value="2">Popular</option>
                        <option value="3">Most Active</option>
                    </select>
                </div>
            </li>
        </ul>
    )
}

