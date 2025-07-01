import Accounts from "./Accounts"
import SearchBar from "./Searchbar"

const TopBar: React.FC = () => {
    return (
        <div className = "flex justify-between">
            <SearchBar/>
            {/* <Accounts/> */}
        </div>
    )
}

export default TopBar;