import "../css/sidebaricon.css";
export default function SideBarIcon(){
    return(
        <div className="icon">
             <ul className="bar-item">
             <a className="bar-link" href="/sidebar">
<img src="/public/ham.svg" alt= "Icon" className="sidebar-icon"/>
</a>
</ul>
</div>
    );
}