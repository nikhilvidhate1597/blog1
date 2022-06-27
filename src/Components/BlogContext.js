import React, { createContext, useState } from "react";

export const BlogContext = createContext();

export const BlogProvider = (props) => {
    const [bollywood, setBollywood] = useState([{
            "Title": " The trailer for HIT: The First Case is out nowr",
            "CategoryName": "Bollywood",
            "PublishedDate": "June 23 2022",
            "ImageAsset": "https://www.firstpost.com/wp-content/uploads/2022/06/640-x-363-2022-06-23T182338.847.jpg?impolicy=website&width=640&height=362",
            "BlogContent": "Gulshan Kumar and T-Series present in association with Dil Raju Productions HIT: The First Case. Directed by Dr Sailesh Kolanu, the film is produced by Bhushan Kumar, Dil Raju, Krishan Kumar, and Kuldeep Rathore. The film starring Rajkummar Rao and Sanya Malhotra hits the theatres on the 15th of July, 2022..",
            "Likes": "22,413,654 view"
        },
        {
            "Title": "JugJugg Jeeyo: Here's how much fees Varun Dhawan, Kiara Advani, Anil Kapoor and other celebs charged for the family drama entertainer",
            "CategoryName": "Bollywood",
            "PublishedDate": "June 26 2022",
            "ImageAsset": "https://st1.bollywoodlife.com/wp-content/uploads/2022/06/JugJugg-Jeeyo-cast-salary1.png",
            "BlogContent": "Varun Dhawan, Kiara Advani, Anil Kapoor, Neetu Kapoor and more celebs starrer JugJugg Jeeyo is out in the cinemas and people are loving it and how! The movie is a family drama entertainer that talks about two couples facing marital problems. Varun Dhawan plays Kukoo to Kiara Advani’s Naina, whereas Anil Kapoor plays Bheem to Neetu Kapoor’s Geeta. The cast is getting love from all corners of the country. The trailer, songs and chemistry as a family is being widely appreciated. Today, we will be having a dekko at the salary of JugJugg Jeeyo cast members. ",
            "Likes": "700,422 views",
        },
        {
            "Title": " Varisu Upcoming Movie",
            "CategoryName": "Bollywood",
            "PublishedDate": "June 16 2022",
            "ImageAsset": "https://www.filmibeat.com/fanimg/movie/20132/varisu-thalapathy-66-photos-images-78797.jpg",
            "BlogContent": "Thalapathy Vijay's 66th movie has been titled as 'Varisu' Tamil action, romance direction by Vamshi Paidipally who wrote the film with Hari and Ahishor Solomon. The movie cast includes Rashmika Mandanna, Mehreen Pirzada, Prakash Raj, Sarathkumar, Shaam, Yogi Babu and Prabhu. Lyricist Vivek joins for additional screenplay and dialogues.The music is composed by Thaman S and Thalapathy 66 is his first collaboration with Vijay. The movie is scheduled to hit the theatres on January 2023 on the occasion of Pongal. It is also planned to release in Telugu and Hindi.The first look poster and title announcement of the movie released on June 21, 2022 on the eve of Vijay's birthday.",
            "Likes": "50M"
        },
        {
            "Title": " Did Ranbir Kapoor's Shamshera's Trailer HURT Religious Sentiments? Sanjay Dutt's Tilak Look Stirs Controversy",
            "CategoryName": "Bollywood",
            "PublishedDate": "June 25 2022",
            "ImageAsset": "https://www.filmibeat.com/img/2022/06/xsanjay-dutt-shamshera-1656156266.jpg.pagespeed.ic.GHKYMwnCz6.jpg",
            "BlogContent": "Yesterday (June 24, 2022), Ranbir Kapoor-starrer Shamshera's trailer got unveiled on YouTube and received positive response from netizens. However, a section of netizens have been feeling a bit offended by Sanjay Dutt's look in it. According to them, portraying an antagonist with 'tilak' on his head has hurt their religious sentiment and they are extremely upset with it.",
            "Likes": "600M"
        },
        {
            "Title": " Ayushmann Khurrana’s Anek is now streaming on this OTT platform",
            "CategoryName": "Bollywood",
            "PublishedDate": "June 26 2022",
            "ImageAsset": "https://images.indianexpress.com/2022/05/anek1200.jpg",
            "BlogContent": "Ayushmann Khurrana’s Anek is now available to stream on Netflix nearly a month after it released in cinemas. The film dropped on the streaming giant on June 26. The streaming platform made the announcement and shared a poster of Ayushmann from the film.",
            "Likes": "1M"
        }
    ]);

    const [technology, setTechnology] = useState([{
            "Title": " Poco F4 5G review: A dependable mid-range option",
            "CategoryName": "Technology",
            "PublishedDate": "June 27 2022",
            "ImageAsset": "https://images.indianexpress.com/2022/06/PocoF4_5G_New3-1.jpg",
            "BlogContent": "Purchasing a phone in the Rs 25,000 to Rs 30,000 segment can be confusing in the Indian market. There’s definitely increased competition. It doesn’t help that many phones appear to have broadly similar specifications. There are, of course, some differences. Sometimes it is the camera setup or the charging speed. The latest addition to this segment is the Poco F4 5G, which frankly, did seem underwhelming to me at first glance. There’s no one ‘wow’ factor that makes you think the Poco F4 is standing out in the sea of sameness. But that’s not necessarily a bad thing. Here’s my review of the Poco F4 5G.",
            "Likes": "8000K"
        },
        {
            "Title": " NASA CAPSTONE launch to the moon delayed again",
            "CategoryName": "Technology",
            "PublishedDate": "June 25 2022",
            "ImageAsset": "https://images.indianexpress.com/2022/06/Capstone-moon-mission-featured.jpg",
            "BlogContent": "NASA, Rocket Lab and Advanced Space are standing down from the launch of the CAPSTONE (Cislunar Autonomous Positioning System Technology Operations and Navigation Experiment) mission planned for June 27. The teams are evaluating weather and other factors to determine a date for the next launch opportunity.The next launch opportunity for the mission within the current period is on June 28. But CAPSTONE’s trajectory design means that the spacecraft will arrive at its lunar orbit on November 13, no matter when its launch date falls during the current launch period, which will offer launch opportunities every day till July 27.",
            "Likes": "650"
        },
        {
            "Title": " The all new Apple MacBook Pro: Gets the work done, without slowing down",
            "CategoryName": "Technology",
            "PublishedDate": "March 9 2022",
            "ImageAsset": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAUMus7.img?h=758&w=1348&m=6&q=60&o=f&l=f",
            "BlogContent": "The ports making a comeback include full-size HDMI, card slot reader and the Mag Safe 3 charging port with magnetic connector, other than thunderbolt ports and audio port. While the comeback ports aren’t the most advanced ones but still support high-speed data transfer. I love the MagSafe connector as it prevents the laptop from falling if walked on the cord accidentally.",
            "Likes": "700"
        },
        {
            "Title": " Google hit with antitrust complaint by Danish job search rival",
            "CategoryName": "Technology",
            "PublishedDate": "June 24 2022",
            "ImageAsset": "https://images.indianexpress.com/2022/06/Google_Logo_Reuters.jpeg",
            "BlogContent": "Google was hit with an antitrust complaint on Monday after a Danish online job-search rival took its grievance to EU regulators, alleging the Alphabet unit had unfairly favoured its own job search service.The complaint could accelerate EU antitrust chief Margrethe Vestager’s scrutiny of the service, Google for Jobs, three years after it first came under her microscope. Since then the EU has taken no specific action relating to the online job-search sector.",
            "Likes": "9000"
        },
        {
            "Title": " OnePlus Nord 2T 5G’s launch in India confirmed for July",
            "CategoryName": "Technology",
            "PublishedDate": "June 25 2022",
            "ImageAsset": "https://images.indianexpress.com/2022/06/OnePlus-Nord-2T-launch-India.jpg",
            "BlogContent": "The OnePlus Nord 2T 5G  will launch in the Indian market in the month of July. The exact launch date has not been confirmed. The phone was recently launched globally and the new addition will expand the Nord series further, which is increasingly occupying a more important space in the overall OnePlus portfolio. The OnePlus Nord 2T will be the first addition to the main Nord number series after the launch of the OnePlus Nord 2 in July 2021.",
            "Likes": "42K"
        }
    ]);

    const [hollywood, setHollywood] = useState([{
            "Title": " Taika Waititi, ‘Thor: Love and Thunder’ Stars on Raising the ‘Ragnarok’ Bar: “Is It Possible to Top That? We Did”",
            "CategoryName": "Hollywood",
            "PublishedDate": "June 24 2022",
            "ImageAsset": "https://www.hollywoodreporter.com/wp-content/uploads/2022/06/Thor-Love-And-Thunder-World-Premiere-Cast-Carpet-GettyImages-1404811556-H-2022.jpg?w=681&h=383&crop=1&resize=681%2C383",
            "BlogContent": " Thor: Love and Thunder follows the God of Thunder (Chris Hemsworth) through the next chapter of his life — a journey to find himself. When his ex-girlfriend Jane Foster (Natalie Portman) reenters the picture — this time, as the Mighty Thor — along with the threat of a god-killing villain Gorr the God Butcher (Christian Bale), Thor embarks on another adventure to save his people. ",
            "Likes": "8000M"
        },
        {
            "Title": "Japanese City Launches Campaign to Preserve Forest that Inspired Hayao Miyazaki’s ‘My Neighbor Totoro’",
            "CategoryName": "Hollywood",
            "PublishedDate": "June 23 2022",
            "ImageAsset": "https://www.hollywoodreporter.com/wp-content/uploads/2020/01/1013224_1.jpg?w=450&h=253&crop=1",
            "BlogContent": "A city in Japan has launched a crowdfunding campaign to help preserve a stretch of pristine forest that inspired Hayao Miyazaki when he was creating his classic hand-drawn animation My Neighbor Totoro.  The city of Tokorozawa, located about 20 miles northwest of Tokyo, has set out a plan to raise 2.6 billion yen ($19 million) to […]"
        },
        {
            "Title": " ‘Blade Runner: Enhanced Edition’ Video Game Restored for Consoles, Steam Arrives",
            "CategoryName": "Hollywood",
            "PublishedDate": "June 23 2022",
            "ImageAsset": "https://www.hollywoodreporter.com/wp-content/uploads/2022/06/blade_runner_enhanced-16_9_super_hero_art_1920x1080.png?w=450&h=253&crop=1",
            "BlogContent": "The 1997 point-and-click adventure title Blade Runner has arrived in a restored “enhanced edition.” Independent video game publisher Nightdive Studios, known for restoring classic video games such as System Shock and Turok: Dinosaur Hunter, partnered with production company Alcon Entertainment to bring the classic game, based on the iconic 1982 film, back to fans via […]",
            "Likes": "2M"
        },
        {
            "Title": " Netflix Cuts 300 Employees in New Round of Layoffs",
            "CategoryName": "Hollywood",
            "PublishedDate": "June 23 2022",
            "ImageAsset": "https://www.hollywoodreporter.com/wp-content/uploads/2022/06/GettyImages-1392389052-H-2022.jpg?w=450&h=253&crop=1",
            "BlogContent": "Netflix has cut an additional 300 employees — around 3 percent of its workforce — marking the latest round of major layoffs at the beleaguered streaming giant. “Both Ted and I regret not seeing our slowing revenue growth earlier so we could have ensured a more gradual readjustment of the business,” read a note sent […]",
            "Likes": "800K"
        },
        {
            "Title": " Tokyo Film Market to Return as Virtual Event for Third Consecutive Year",
            "CategoryName": "Hollywood",
            "PublishedDate": "June 23 2022",
            "ImageAsset": "https://www.hollywoodreporter.com/wp-content/uploads/2022/06/Tokyo-Stock-Image-Getty.jpeg?w=450&h=253&crop=1",
            "BlogContent": "TIFFCOM, the content market that runs in tandem with the Tokyo International Film Festival each Fall, will remain an online-only event in 2022 for the third consecutive year, organizers confirmed Thursday. TIFFCOM shifted to the virtual format in 2020 as the COVID-19 pandemic swept the globe, driving most major film festivals and markets online. TIFFCOM’s […]",
            "Likes": "1M"
        }

    ]);

    const [fitness, setFitness] = useState([{
            "Title": " Power your paddle sports with three great exercises",
            "CategoryName": "Fitness",
            "PublishedDate": "June 1 2022",
            "ImageAsset": "https://domf5oio6qrcr.cloudfront.net/medialibrary/12577/320556aa-870b-4186-8366-49e0a3b4f290.jpg",
            "BlogContent": "Like kayaking or canoeing, paddleboarding provides a serious workout. But before you head out on the water, you’ll want to get some key muscle groups in shape, especially ones that probably have not been used much during winter.",
            "Likes": "800K"
        },
        {
            "Title": " Seven Things You Need to Know About Writing Fitness",
            "CategoryName": "Fitness",
            "PublishedDate": "June 10 2022",
            "ImageAsset": "https://qtxasset.com/cdn-cgi/image/w=850,h=478,f=auto,fit=crop,g=0.5x0.5/https://qtxasset.com/quartz/qcloud2/media/image/clubindustry/1586278483/clubindustry_default.jpeg?VersionId=gfwmEsya5uEdGB6pY.DJwn4YprEY6fNl",
            "BlogContent": "However, your clients also want to know they are working with credible experts. Promoting the trainers on your staff isn’t a daunting task. In fact, it is about as easy a marketing task as you’ll find. Nothing builds credibility in the mind of the prospective personal training client faster than public speaking and writing.",
            "Likes": "1M+"
        },
        {
            "Title": " Treat Excessive Sweating With The Help Of Botox Injection",
            "CategoryName": "Fitness",
            "PublishedDate": "March 10 2022",
            "ImageAsset": "https://images.news18.com/ibnlive/uploads/2022/01/untitled-1-37-16425166563x2.jpg?impolicy=website&width=510&height=356",
            "BlogContent": "re you someone who sweats excessively even when it’s not hot? If yes, then you might be suffering from Hyperhidrosis. The medical condition happens when people sweat abnormally even in the cold weather. The sweat wets their clothes and makes them smell bad sometimes. Regular medication like antidepressants does not prove helpful in this condition often.And many of your members may believe fitness professionals are nothing more than a jock who isn’t smart enough to get a real job. High-quality articles written by your staff will immediately change their perception.",
            "Likes": "800K"
        },
        {
            "Title": " ‘These 19 Benefits of Pilates Will Inspire You to Fire Up Your Core",
            "CategoryName": "Fitness",
            "PublishedDate": "June 06 2022",
            "ImageAsset": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQwK9EmhshB7Dh7JkH0hRcFKKjSlk9YxpT9Q&usqp=CAU",
            "BlogContent": "The third quarter of 2021 was the biggest quarter for smartwatches,” said Anshika Jain, Senior Research Analyst at Counterpoint. “We have seen that because of COVID-19, there has been a change in customer preferences. People are shifting to smartwatches from traditional watches. ",
            "Likes": "1M"
        },
        {
            "Title": " The 15 Best Running Shoes With Arch Support, According to Podiatrists",
            "CategoryName": "Fitness",
            "PublishedDate": "June 11 2022",
            "ImageAsset": "https://www.health.com/thmb/tuTiV-wwBEFVyum575kO0fml7FY=/900x0/filters:no_upscale():max_bytes(150000):strip_icc():gifv():format(webp)/running-adobestock_225642579-2000-1412b41669a445b8863e4fa0d921d449.jpeg",
            "BlogContent": "Whether your runs always end with cramped arches or you simply want to ensure your feet are properly supported throughout a workout, it's time to start considering a running shoe with arch support.While built-in arch support may feel like an unnecessary and bulky addition to your sneakers, it's actually a critical feature for preventing common runner issues like plantar fasciitis, heel spurs, and ankle sprains—especially if you have flat feet.",
            "Likes": "800K"
        }
    ]);

    const [food, setFood] = useState([{
            "Title": " Under 100-calorie Fruit Kebabs that are perfect for dinner",
            "CategoryName": "Food",
            "PublishedDate": "June 1 2022",
            "ImageAsset": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlFerbGr_bMhmnims0G7WtPUmgc-a8VXUVBg&usqp=CAU",
            "BlogContent": "With the scorching summer season in full power, one feels like having snacks that are neither oily nor sugary. The best way to satiate your hunger pangs in a healthy manner is by snacking on fruits. Packed with antioxidants, fruits offer a variety of nutrients, vitamins, minerals and can refresh your body to the core. If you are bored of having fruits the usual way, here are some quirky Fruit Kebab combinations you can try at home. Be it kids or adults, everyone will love these Fruit Kebabs for sure. (image credits-istock). ",
            "Likes": "500k+"
        },
        {
            "Title": " Is the turmeric you are using secretly making you sick?",
            "CategoryName": "Food",
            "PublishedDate": "June 11 2022",
            "ImageAsset": "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/01/327455_1100-800x825.jpg",
            "BlogContent": "When it comes to weight loss, most of us believe that following a strict diet would help us lose weight. And in some cases, it can. But if you are someone new who is going on a diet for the first time, it can get a bit challenging. At times, you may feel like your hunger isn't fulfilled. ",
            "Likes": "1M+"
        },
        {
            "Title": " Samara wants full biryani, takes control of Paradise Food Court",
            "CategoryName": "Food",
            "PublishedDate": "June 1 2022",
            "ImageAsset": "https://images.news18.com/ibnlive/uploads/2021/12/biryani-16400956083x2.png?impolicy=website&width=510&height=356",
            "BlogContent": "Can consuming too much haldi can silently make you weak? Let's find out. It is impossible to imagine Indian food without haldi. This ancient spice has been a quintessential part of every Indian household.Right from adding a punch of taste and colour to the dishes to boosting immunity to giving a healthy glowing skin, this age-old spice has been one of the most potent and sacred spices used in several Indian rituals.This is the reason why turmeric is used extensively for home remedies, cooking or in drinks like golden milk, but do you know what happens when you add excess to your diet? Here are some shocking facts about consuming excess haldi and how it can impact your health.",
            "Likes": "400K"
        },
        {
            "Title": " 5 vegetables that turn more nutritious when cooked",
            "CategoryName": "Food",
            "PublishedDate": " June 11 2022",
            "ImageAsset": "https://static.toiimg.com/photo/92364888.cms",
            "BlogContent": "It is said that raw vegetables are the best way to include nutrition in your diet. The concept of a ‘raw food diet’ has definitely generated a lot of hype in recent years as they believe ‘the less processed food, the better it will be’. But, what is surprising is that there are several vegetables that turn more nutritious when they are cooked and eating them raw might not yield much nutrition! Here are some of those vegetables that you must know about. ",
            "Likes": "1M+"
        },
        {
            "Title": " 6 salad recipes that can help manage hypertension",
            "CategoryName": "Food",
            "PublishedDate": "June 11 2022",
            "ImageAsset": "https://static.toiimg.com/photo/91985897.cms",
            "BlogContent": "Thanks to irregular lifestyle routines and random eating habits, people at a young age are falling prey to high blood pressure and hypertension. As per experts, this often results in other health issues related to heart, kidney, vision, and even stroke. The solution is to follow a disciplined lifestyle and develop a healthy eating habit of eating foods rich in potassium and fibre and reduce the intake of sodium. Take a look at these 6 healthy salad recipes that can help manage hypertension.",
            "Likes": "708K"
        }
    ]);

    return ( <
        BlogContext.Provider value = {
            {
                value1: [bollywood, setBollywood],
                value2: [hollywood, setHollywood],
                value3: [technology, setTechnology],
                value4: [fitness, setFitness],
                value5: [food, setFood]
            }
        } > { props.children } 
        </BlogContext.Provider>
    )
}