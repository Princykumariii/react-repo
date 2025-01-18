const blogs = [
	{
		title: "React Basics",
		content: "Learn the basics of React.",
		isFeatured: true,
	},
	{
		title: "Advanced React",
		content: "Delve deeper into React.",
		isFeatured: false,
	},
	{
		title: "React Performance Tips",
		content: "Optimize your React apps.",
		isFeatured: true,
	},
];
const BlogPost = (props)=>{
    const {blog} = props;
    return (
    <div style = {{ backgroundColor:blog.isFeatured && "LightYellow"}}>
        <h1>{blog.title}</h1>
        <p>{blog.content}</p>
        </div>
    )
};
const App = ()=>{
    return <div>
       {blogs.map((blog,index)=>{
        return <BlogPost key = {index} blog = {blog} />
       })}
    </div>
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>)

