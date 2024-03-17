
import BlogCard from "./BlogCard";
import Img1 from "../../assets/places/tajmahal.jpg";
import Img2 from "../../assets/places/water.jpg";
import Img3 from "../../assets/places/boat.jpg";

const BlogsData = [
    {
        id: 1,
        image: Img1,
        title: "Top places to visit in India",
        description:
            "The best places to visit in India to experience the most beautiful places like historical places, beach places, hill stations , honeymoon places, romantic places, adventure places, peaceful places and many more.",
        author: "Someone",
        date: "April 22, 2022",
    },
    {
        id: 1,
        image: Img2,
        title: "Top places to visit in US",
        description:
            "One of the best places in America is the famed city of New York. Who doesn’t want to take a bite of the Big Apple? Pop culture has popularized it to the point that most kids in the world know the city’s best landmarks without putting a foot on US soil. And what landmarks! Right from the obvious ones like the Statue of Liberty and Times Square to obscure museums, New York City has it all.",
        author: "Someone",
        date: "April 22, 2022",
    },
    {
        id: 1,
        image: Img3,
        title: "Top places to visit in Japan",
        description:
            "Japan is fast becoming a top tourist destination visited by people all over the world. Nearly 30 million tourists come to Japan every year to visit its popular destinations and World Heritage Sites. The Japanese government has been introducing campaigns to increase foreign visitors and it has been working. Since 2013, there has been a significant increase in tourists to Japan.",
        author: "Someone",
        date: "April 22, 2022",
    },
];

const BlogsComp = () => {
    return (
        <>
            <div className="dark:bg-gray-900 dark:text-white py-10">
                <section data-aos="fade-up" className="container ">
                    <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
                        Our Latest Blogs
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                        {BlogsData.map((item) => (
                            <BlogCard key={item.id} {...item} />
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
};

export default BlogsComp;
