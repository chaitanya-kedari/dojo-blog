const Navbar = () => {
    return ( 
    <nav className="navbar">
        <h1>The DoJo blog</h1>
        <div className="links">
            <a href="/">Home</a>
            <a href="/create" style= {{
                color: 'white',
                backgroundColor: '#f1356d',
                borderRadius: '8px'
            }} >New Blog</a> 
            {/* returning these require new pages creation, TBC later */}
        </div>
    </nav>    
     );
}
 
export default Navbar;
