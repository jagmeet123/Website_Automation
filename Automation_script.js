const puppy = require('puppeteer');
const say = require('say');
const path = require('path');
const fs = require('fs');

let caption = [`#MynewWebiste #BookMark \n PLEASE DO VISIT IT AND GIVE YOUR FEEDBACK IN THE COMMENT SECTION.`];
const Mybaddress = "ABC-123 GURUGRAM DELHI-110034";
const MyPhone = "9999923456"; 
const MyLocation = "GURUGRAM";
const MyEmail = "RohanSudan@gmail.com";

/* Add here your username and password
const username = ; 
const password = ;
let facebook_id =  ;
let facebook_password =   ;
*/

const websitename = "eBayJagmeet";
const url_to_weksite = true;
const div_array_index = ['Future Vision','Mission','Corporate Values','Innovative Design','Business Integration','Business Consulting'];
const div_array_index_ans = ['Continuously engage in creating future spaces to facilitate generational changes to transform every aspect of life of an individual, family and institution','amongst the leaders in developing and managing Smart Digital Cities through collaborations with its partners and by using its inherent expertise of promoters','Provide leadership with ability, integrity and humility;Nurture innovation and learning across organization;Be trust worthy and fair to its partners','Constantly innovates to conceive and bring such applications and services to market, for both the PC and post-PC era','Have experience in building and delivering world-class solutions through such integrated business partnerships','To bear for select global and Indian clients, specifically in the area of Information, Communication and Smart & Intelligent spaces']

async function main(){

    let browser = await puppy.launch({
        headless:false,
        defaultViewport:false,
        args:['--start-fullscreen']
        // slowMo:50
    });

    let tabs = await browser.pages()
    let tab = await tabs[0];
    await tab.goto('https://www.bookmark.com/login');
    await tab.waitForSelector('input[name="email"]');
    await tab.type('input[name="email"]',username);
    await tab.type('input[name="password"]',password);
    await tab.click('button[type="submit"]'); 

    await tab.waitForSelector('.nav-link.py-lg-3');
    let s = await tab.$$('.nav-link.py-lg-3');
    await s[1].click();

    say.speak('With the ongoing pandemic remember, Stopping the spreadstarts with you so do wear a mask');
    // Create the website button
    await tab.waitForNavigation({waitUntil:'networkidle0'});
    await tab.click('.container.space-2.space-lg-3 a');

    await tab.waitForTimeout(3000);
    await tab.waitForSelector('li[data-id="1"]');
    await tab.click('li[data-id="1"]');
    await tab.waitForSelector('li[data-categories="1,2"]');
    await tab.click('li[data-categories="1,2"]');
    await tab.keyboard.press("Enter");

    await tab.waitForSelector('input[name="websiteTitle"]');
    await tab.type('input[name="websiteTitle"]',websitename);
    await tab.keyboard.press("Enter");
    // await tab.waitForSelector('.bm-wai-suggestion-name.text-size-16.font-weight-700')
    // await tab.keyboard.press("Enter");

    await tab.waitForSelector('[type="email"]');
    await tab.type('[type="email"]',MyEmail);
    await tab.type("[placeholder='Enter your address']",Mybaddress);
    await tab.type('[placeholder="Enter your phone number"]',MyPhone); 
    await tab.type('[placeholder="Enter your city"]',MyLocation); 

    const [fileChooser] = await Promise.all([
        tab.waitForFileChooser(),
        tab.click('input[type="file"]')
    ])
    await fileChooser.accept(['C:\\Users\\hp1\\Downloads\\1.jpg']);
        
    // let MyLinks = ['https://cppsecrets.com/user/?uid=1187','https://www.facebook.com/batab.jain','https://www.instagram.com/cristiano/']
    // let links = await tab.$$('[aria-label="Text input with dropdown button"]');
    // for(let i=0;i<links.length;i++){
    //     await tab.evaluate(function(e) {
    //         document.querySelector(e).value = MyLinks[i];
    //     },links[i]);
    // }

    await tab.keyboard.press("Enter");
    await FunctionWebsiteGoal(browser,tab);
}

async function FunctionWebsiteGoal(browser,tab){

    let websiteGoal = ['Call my business','Message my business','Book or reserve something','Click a call to action button'];
    let ansWebsiteGoal = 'Call my business';

    // await tab.waitForSelector('[data-id="calls"]');
    if(ansWebsiteGoal===websiteGoal[0]){
        await tab.waitForSelector('[data-id="calls"]');
        await tab.click('[data-id="calls"]');
    }else if(ansWebsiteGoal===websiteGoal[1]){
        await tab.waitForSelector('[data-id="message"]');
        await tab.click('[data-id="message"]');
    }else if(ansWebsiteGoal===websiteGoal[2]){
        await tab.waitForSelector('[data-id="submission"]');
        await tab.click('[data-id="submission"]');
    }else if(ansWebsiteGoal===websiteGoal[3]){
        await tab.waitForSelector('[data-id="cta"]');
        await tab.click('[data-id="cta"]');
    }
    await tab.keyboard.press('Enter');

    // [data-id="blog"] [data-id="ecomm"] [data-id="book"]
    let websiteFeatures = ['Custom Blog','Online Store','Bookings / Reservations']
    let ansWebsiteFeatures1 = 'Custom Blog';
    let ansWebsiteFeatures2 = 'Online Store';
    let ansWebsiteFeatures3 = 'Bookings / Reservations';

    if(ansWebsiteFeatures1===websiteFeatures[0]){
        await tab.waitForSelector('[data-id="blog"]');
        await tab.click('[data-id="blog"]');
    }
    if(ansWebsiteFeatures2===websiteFeatures[1]){
        await tab.waitForSelector('[data-id="ecomm"]');
        await tab.click('[data-id="ecomm"]');
    }
    if(ansWebsiteFeatures3===websiteFeatures[2]){
        await tab.waitForSelector('[data-id="book"]');
        await tab.click('[data-id="book"]');
    }
    await tab.keyboard.press('Enter');
    
    // [data-id="calls"] [data-id="message"] [data-id="submission"]  [data-id="cta"]
    let WebsiteTheme = ['Bright','Fresh','Minimal','Bold','Modern','Elegant'];
    let ansWebsiteTheme = 'Bright';
    
    if(ansWebsiteTheme===WebsiteTheme[0]){
        await tab.waitForSelector('[data-id="bright"]');
        await tab.click('[data-id="bright"]');
    }
    else if(ansWebsiteTheme===WebsiteTheme[1]){
        await tab.waitForSelector('[data-id="fresh"]');
        await tab.click('[data-id="fresh"]');
    }
    else if(ansWebsiteTheme===WebsiteTheme[2]){
        await tab.waitForSelector('[data-id="clean"]');
        await tab.click('[data-id="clean"]');
    }
    else if(ansWebsiteTheme===WebsiteTheme[3]){
        await tab.waitForSelector('[data-id="bold"]');
        await tab.click('[data-id="bold"]');
    }
    else if(ansWebsiteTheme===WebsiteTheme[4]){
        await tab.waitForSelector('[data-id="modern"]');
        await tab.click('[data-id="modern"]');
    }
    else if(ansWebsiteTheme===WebsiteTheme[5]){
        await tab.waitForSelector('[data-id="sophisticated"]');
        await tab.click('[data-id="sophisticated"]');
    }

    await tab.keyboard.press('Enter');

    await tab.waitForSelector('.card.border.mb-3.cursor-pointer.shadow-darker');
    let WebsiteStructures = await tab.$$('.card.border.mb-3.cursor-pointer.shadow-darker');
    await WebsiteStructures[0].click();
    
    await tab.keyboard.press('Enter');

    await tab.waitForSelector('.square.cursor-pointer.w-100.bg-img-hero-center.rounded.shadow-darker.border');
    let NoImages = await tab.$$('.square.cursor-pointer.w-100.bg-img-hero-center.rounded.shadow-darker.border');
    let AnsNoImages = 5;
    for(let i=0;i<AnsNoImages;i++){
        await tab.evaluate(function(e){
            e.click();
        },NoImages[i]);
    }
    await tab.keyboard.press('Enter');

    say.speak('Please wait for few seconds. !!!! Your Website is being created.');
    await tab.waitForTimeout(95000);
    await tab.waitForSelector('a[data-not-jframe="true"]');
    await tab.click('a[data-not-jframe="true"]')

    await Contact(tab);
    await Home(tab,browser);
    // await tab.waitForSelector('div.popup-wrap');
    // await tab.waitForSelector('.btn.btn-block.bm-new-btn.btn-green-rounded.bm-recreate-new-hook');
    // await tab.click('.btn.btn-block.bm-new-btn.btn-green-rounded.bm-recreate-new-hook');
}

async function Contact(tab){
    await tab.waitForSelector('[data-order="2"] a');
    await tab.click('[data-order="2"] a');    
}

async function Home(tab,browser){
    await tab.waitForSelector('[data-order="1"] a');
    await tab.click('[data-order="1"] a');

    // await tab.waitForSelector("#TIE_1");
    // await tab.click("#TIE_1 strong");
    // await tab.click(".bm-col.col-md-12 strong");
    // await tab.click(".bm-col.col-md-12.bm-element-state-hover strong");
    // await tab.waitForSelector('.bm-col.col-md-12.bm-element-state-hover'); 
    // await tab.type(".bm-col.col-md-12.bm-element-state-hover h1 strong",WebSiteTitle);

    // .bm-col.col-md-12.bm-element-state-hover
    // await tab.hover('#TIE_1');
    // await tab.click('#TIE_1');
    // await tab.click('#TIE_1 strong');
    
    // await tab.type("#TIE_1 strong","Hello");

    // await tab.waitForNavigation({waitUntil:'networkidle0'});
    // await tab.waitForSelector('#TIE_1 strong');
    // let ansTitle = "ABC - Website";
    // await tab.type("#TIE_1 strong",ansTitle);

    await Editing(tab);

    await tab.waitForSelector('a[title="You have unsaved changes, save now.."]')
    await tab.click('a[title="You have unsaved changes, save now.."]');
    console.log("SAVE BUTTON CLICKED");
    await tab.waitForTimeout(1000);

    await tab.waitForSelector('.bm-publish-hook.bm-ic-w.bm-ic-gray');
    await tab.click('.bm-publish-hook.bm-ic-w.bm-ic-gray');
    console.log("PUBLISH BUTTON CLICKED");

    try{
        await tab.waitForSelector('.bm-popup-tube .bm-publish.bm-publish-success.bm-publish-white i[aria-hidden="true"]');
        await tab.waitForTimeout(1000);
        let s = await tab.$$('.bm-publish-do-publish');
        await s[2].click();
        console.log("PUBLISH ANYWAY CLICKED");
    }catch{
        console.log("No PUBLISH ANYWAY CLICKED");
    }

    await tab.waitForSelector('.bm-popup-tube .fa.fa-check-circle.fa-ai-blue[aria-hidden="true"]');
    await tab.waitForSelector('.bm-popup-tube .bm-publish.bm-publish-success.bm-publish-white .bm-publish-opts .bm-publish-opts-link a');
    let urls = await tab.$$('.bm-popup-tube .bm-publish.bm-publish-success.bm-publish-white .bm-publish-opts .bm-publish-opts-link a');
    console.log("Website Length:"+urls.length);
    
    let arr=[];
    for(let i=0;i<urls.length;i++){
        url = await tab.evaluate(function(e){
            return e.getAttribute('href');
        },urls[i]);
        arr.push(url);
    }

    console.log("Website Link: "+arr);
    // say.speak("Your website URL IS: ");
    // say.speak(arr[0], 'Alex', 0.5)

    console.log("Now your caption is: "+caption);
    await YourWebsite(browser,arr);
}

async function YourWebsite(browser,arr){
    let tab3 = await browser.newPage();
    tab3.goto(arr[0]);
    say.speak('Your Website is all set to use');
    await tab3.waitForNavigation({waitUntil:'networkidle0'})
    await tab3.screenshot({
        path:'./Captures/capture.jpg',
    });
    await autoScroll(tab3);
    await facebook_upload(browser,arr);
}

async function facebook_upload(browser,arr){
    let tab1 = await browser.newPage();
    await tab1.goto('https://www.facebook.com');
    await tab1.waitForSelector('input[type="text"]');
    await tab1.type('input[type="text"]',facebook_id);
    await tab1.type('input[type="password"]',facebook_password);
    await tab1.keyboard.press("Enter");

    
    await tab1.waitForSelector('a[aria-label="Friends"]');
    await tab1.goto("https://www.facebook.com");
    

    // create posts
    await tab1.waitForTimeout(3000);
    await tab1.keyboard.press("Enter");
    await tab1.waitForSelector('.m9osqain.a5q79mjw.jm1wdb64.k4urcfbm',{visible:true});
    await tab1.click('.m9osqain.a5q79mjw.jm1wdb64.k4urcfbm');

    await tab1.waitForSelector('.idiwt2bm.lzcic4wl.ni8dbmo4.stjgntxs.l9j0dhe7.dbpd2lw6');
    let sentence = " hello john my name is babat";

    for(let i=0;i<caption[0].length;i++){
        await tab1.keyboard.press(caption[0][i]);
    }
    await tab1.keyboard.press("Enter");
    
        console.log('You are adding a direct Link of the URL on Your Facebook Post.');
    
        const [filechooser] = await Promise.all([
            tab1.waitForFileChooser(),
            tab1.waitForSelector('div[aria-label="Photo/Video"]'),
            tab1.click('div[aria-label="Photo/Video"]')
        ]);
    
        const testFolder = 'F:/PP9-JAVASCRIPT/BookMarl_pupeeteer/Captures';
        var files = fs.readdirSync(testFolder);
        for(var i in files) {
            if(path.extname(files[i]) === ".jpg") {
                    ans = files[i];
                    break;
            }
        }
        console.log("File name : F:/PP9-JAVASCRIPT/BookMarl_pupeeteer/Captures/"+ans);
        await filechooser.accept(["F:/PP9-JAVASCRIPT/BookMarl_pupeeteer/Captures/"+ans]);
        console.log("done");    
        console.log('You are adding a ScreenShot of your website Your Facebook Post.');
    
    
    await tab1.waitForTimeout(2000);
    await tab1.waitForSelector('.rq0escxv.l9j0dhe7.du4w35lb.j83agx80.pfnyh3mw.taijpn5t.bp9cbjyn.owycx6da.btwxx1t3.kt9q3ron.ak7q8e6j.isp2s0ed.ri5dt5u2.rt8b4zig.n8ej3o3l.agehan2d.sk4xxmp2.d1544ag0.tw6a2znq.s1i5eluu.tv7at329')
    await tab1.waitForTimeout(2000);
    await tab1.click('.rq0escxv.l9j0dhe7.du4w35lb.j83agx80.pfnyh3mw.taijpn5t.bp9cbjyn.owycx6da.btwxx1t3.kt9q3ron.ak7q8e6j.isp2s0ed.ri5dt5u2.rt8b4zig.n8ej3o3l.agehan2d.sk4xxmp2.d1544ag0.tw6a2znq.s1i5eluu.tv7at329');
    await tab.waitForTimeout(1000);
    await browser.close();
}

async function autoScroll(page){

    await page.evaluate(async () => {
        await new Promise((resolve, reject) => {
            var totalHeight = 0;
            var distance = 100;
            var timer = setInterval(() => {
                var scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;

                if(totalHeight >= scrollHeight){
                    clearInterval(timer);
                    resolve();
                }
            }, 100);
        });
    });
}

const SiteInformation = ['175+','130','3M','2 Days'];
const SiteInformationIndex = ["Products","Locations","Clients","Delivery Time"];
const social_media_urls = {
    "Instagram":"https://www.instragram_jaz.com",
    "Facebook":"https://www.Facebook_jaz.com",
    "Youtube":"https://www.Youtube_jaz.com",
    "Twitter":"https://www.Twitter_jaz.com",
    "Piniterest":"https://www.Piniterest_jaz.com",
    "Snapchat":"https://www.Twitter_jaz.com"
}
const ContactAddress = 'B-168, Vivek Vihar,\n Delhi-110052';
const ContactInfoIndex = 'Background History';
const ContactInfo = "eBayJagmmet is,India’s leading eCommerce marketplace, is India’s largest online shopping website where thousands of Indian merchants list a wide range of products across Electronics, Lifestyle, Media and Collectibles categories. eBay India has 2.1 million active users from 4,306 cities in India. eBay India is a 100% subsidiary of eBay Inc.";
const ContactNavigation = 'Home|Contact|About|Photos|Faq';

const AboutIndex = 'Jagmeet Ecomerce';
const AboutInfo = "In layman's terms, Lorem Ipsum is a dummy or placeholder text. It's often used in laying out print, infographics, or web design. The primary purpose of Lorem Ipsum is to create text that does not distract from the overall layout and visual hierarchy";
const AboutInfodata = "eBayJagmeet is a global commerce and payments leader, providing a robust platform where merchants of all sizes can compete and win. Founded in 1995 in San Jose, Calif., eBay Inc. connects millions of buyers and sellers and enabled $205 billion* of commerce volume in 2013. We do so through eBay, one of the world's largest online marketplaces, which allows users to buy and sell in nearly every country on earth; through PayPal, which enables individuals and businesses to securely, easily and quickly send and receive digital payments; and through eBay Enterprise, which enables omnichannel commerce, multichannel retailing and digital marketing for global enterprises in the U.S. and internationally. We also reach millions through specialized marketplaces such as StubHub, the world's largest ticket marketplace, and eBay classifieds sites, which together have a presence in more than 1,000 cities around the world. For more information about the company and its global portfolio of online brands";

const AwardsIndex = 'Certifications';
const AwardsInfo = 'RBS Certification is fast growing management Certification body in India. we offer a range of Certification Schemes that are focused on providing the manufacturer and supplier a pathway to meet market requirements whether they are based on regulation or customer driven. RBS Certification is a Company registered under the provisions of the Companies Act. ABC123 is a 1956.ISO 9001:2015, ISO 14001:2015, ISO TS16949:2009 ,OHSAS 18001:2007 Certified since 1990.';
const FAQ_Array= ['Can I get a free prime Membership Before purchase','How does it work','Can the product be returned','In how many days can the products be returned','How do I buy Membership Gift Cards','How to track my order'];
const FAQ_Array_Answer = ['Yes U will get a month trial period.Then you would have to pay Rs.100 per month','Product will be derivered to your location.','Yes, the product can be returned','Products can only be returned when faulty or need to be exchanged','If you pay by Amazon pay then you would be given a gift card on every purchase, then','You will send an message on your registered Phone number or mail on your registered email Id. You will get a link using with track your order.'];

async function saveChanges(tab){
    await tab.waitForSelector('a[title="You have unsaved changes, save now.."]')
    await tab.click('a[title="You have unsaved changes, save now.."]');
    console.log("SAVE BUTTON CLICKED");
    await tab.waitForTimeout(9000);
}

async function EditingContact(tab){

    await tab.waitForTimeout(3000);
    await tab.waitForSelector("#TIE_1");
    console.log("1");
    await tab.hover(".bm-col.col-md-12 #TIE_1 strong");
    console.log("11")
    await tab.click('.bm-col.col-md-12.bm-element-state-hover #TIE_1 strong'); 
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TIE_1","Contact");
    console.log("3");

    // TE_1 
    await tab.hover(".bm-col.col-md-12 #TE_1");
    console.log("10")
    await tab.click('.bm-col.col-md-12.bm-element-state-hover #TE_1'); 
    console.log("11");
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TE_1","A"); 
    console.log("12");
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TE_1",ContactAddress); 

    // TIE_6
    await tab.waitForSelector("#TIE_6");
    console.log("1");
    await tab.hover(".bm-col.col-md-12 #TIE_6 strong");
    console.log("11")
    await tab.click('.bm-col.col-md-12.bm-element-state-hover #TIE_6 strong'); 
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TIE_6",ContactInfoIndex);
    console.log("3");

    // TE_2
    await tab.hover(".bm-col.col-md-12 #TE_2");
    console.log("10")
    await tab.click('.bm-col.col-md-12.bm-element-state-hover #TE_2'); 
    console.log("11");
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TE_2","A"); 
    console.log("12");
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TE_2",ContactInfo); 

    // TE_3
    await tab.hover(".bm-col.col-md-12 #TE_3");
    console.log("10")
    await tab.click('.bm-col.col-md-12.bm-element-state-hover #TE_3'); 
    console.log("11");
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TE_3","A"); 
    console.log("12");
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TE_3",ContactNavigation); 
    await saveChanges(tab);
}

async function EditingAbout(tab){

    await tab.waitForTimeout(2000);
    await tab.waitForSelector(".bm-col.col-md-12 #TIE_1");
    console.log("1");
    await tab.hover(".bm-col.col-md-12 #TIE_1 strong");
    console.log("11")
    await tab.click('.bm-col.col-md-12.bm-element-state-hover #TIE_1 strong'); 
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TIE_1",AboutIndex);
    console.log("3");

    // await tab.waitForTimeout(2000);
    // await tab.waitForSelector(".bm-col.col-md-12 #TIE_2");
    // console.log("1");
    // await tab.hover(".bm-col.col-md-12 #TIE_2");
    // console.log("11")
    // await tab.click('.bm-col.col-md-12.bm-element-state-hover #TIE_2'); 
    // await tab.keyboard.down("Control");
    // await tab.keyboard.press("A");
    // await tab.keyboard.press("X");
    // await tab.keyboard.up("Control");
    // await tab.type(".bm-col.col-md-12 #TIE_2",AboutInfo);
    // console.log("3");

    // TE_1
    await tab.hover(".bm-col.col-md-12 #TE_1");
    console.log("10")
    await tab.click('.bm-col.col-md-12.bm-element-state-hover #TE_1'); 
    console.log("11");
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TE_1","A"); 
    console.log("12");
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TE_1",AboutInfodata); 

    await tab.waitForSelector('[data-module="text_number"]');
    let data = await tab.$$('[data-module="text_number"]');

    for(let i=0;i<data.length;i++){
        await data[i].hover();
        await tab.click('.bm-col.col-md-12.bm-element-state-hover [data-module="text_number"]');
        await tab.keyboard.down("Control");
        await tab.keyboard.press("A");
        await tab.keyboard.press("X");
        await tab.keyboard.up("Control");
        await data[i].type(SiteInformation[i]);
    }

    
    await tab.waitForSelector('.bm-col.col-md-12 #TIE_4 strong');
    await tab.waitForSelector("#TIE_4");
    await tab.hover(".bm-col.col-md-12 #TIE_4 strong");
    await tab.click('.bm-col.col-md-12.bm-element-state-hover #TIE_4 strong'); 
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TIE_4",SiteInformationIndex[0]);

    await tab.waitForSelector('.bm-col.col-md-12 #TIE_5 strong');
    await tab.waitForSelector("#TIE_5");
    await tab.hover(".bm-col.col-md-12 #TIE_5 strong");
    await tab.click('.bm-col.col-md-12.bm-element-state-hover #TIE_5 strong'); 
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TIE_5",SiteInformationIndex[1]);

    await tab.waitForSelector('.bm-col.col-md-12 #TIE_6 strong');
    await tab.waitForSelector("#TIE_6");
    await tab.hover(".bm-col.col-md-12 #TIE_6 strong");
    await tab.click('.bm-col.col-md-12.bm-element-state-hover #TIE_6 strong'); 
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TIE_6",SiteInformationIndex[2]);

try{
    // Awards
    await tab.waitForSelector('.bm-col.col-md-12 #TIE_7 strong');
    await tab.waitForSelector("#TIE_7");
    await tab.hover(".bm-col.col-md-12 #TIE_7 strong");
    await tab.click('.bm-col.col-md-12.bm-element-state-hover #TIE_7 strong'); 
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TIE_7",AwardsIndex);

    // TE_2
    await tab.hover(".bm-col.col-md-12 #TE_2");
    console.log("10")
    await tab.click('.bm-col.col-md-12.bm-element-state-hover #TE_2'); 
    console.log("11");
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TE_2","A"); 
    console.log("12");
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TE_2",AwardsInfo);
/* 
    // TIE_8
    await tab.waitForSelector('.bm-col.col-md-12 #TIE_8 strong');
    await tab.waitForSelector("#TIE_8");
    await tab.hover(".bm-col.col-md-12 #TIE_8 strong");
    await tab.click('.bm-col.col-md-12.bm-element-state-hover #TIE_8 strong'); 
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TIE_8",AwardsNumber[0]);
    // TIE_9
    await tab.waitForSelector('.bm-col.col-md-12 #TIE_9 strong');
    await tab.waitForSelector("#TIE_9");
    await tab.hover(".bm-col.col-md-12 #TIE_9 strong");
    await tab.click('.bm-col.col-md-12.bm-element-state-hover #TIE_9 strong'); 
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TIE_9",AwardsNumber[1]);
    // TIE_10
    await tab.waitForSelector('.bm-col.col-md-12 #TIE_10 strong');
    await tab.waitForSelector("#TIE_10");
    await tab.hover(".bm-col.col-md-12 #TIE_10 strong");
    await tab.click('.bm-col.col-md-12.bm-element-state-hover #TIE_10 strong'); 
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TIE_10",AwardsNumber[2]);
    // TIE_11
    await tab.waitForSelector('.bm-col.col-md-12 #TIE_11 strong');
    await tab.waitForSelector("#TIE_11");
    await tab.hover(".bm-col.col-md-12 #TIE_11 strong");
    await tab.click('.bm-col.col-md-12.bm-element-state-hover #TIE_11 strong'); 
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TIE_11",AwardsNumber[3]);

    // TE_3
     await tab.hover(".bm-col.col-md-12 #TE_3");
     console.log("10")
     await tab.click('.bm-col.col-md-12.bm-element-state-hover #TE_3'); 
     console.log("11");
     await tab.keyboard.down("Control");
     await tab.keyboard.press("A");
     await tab.keyboard.press("X");
     await tab.keyboard.up("Control");
     await tab.type(".bm-col.col-md-12 #TE_3","A"); 
     console.log("12");
     await tab.keyboard.down("Control");
     await tab.keyboard.press("A");
     await tab.keyboard.press("X");
     await tab.keyboard.up("Control");
     await tab.type(".bm-col.col-md-12 #TE_3",ContactNavigation); 
*/  
}catch{
    console.log("No awards column");
}
    await saveChanges(tab);
}

async function EditingFAQ(tab){

    // Title
    await tab.waitForTimeout(2000);
    await tab.waitForSelector("#TIE_1");
    console.log("1");
    await tab.hover(".bm-col.col-md-12 #TIE_1 strong");
    console.log("11")
    await tab.click('.bm-col.col-md-12.bm-element-state-hover #TIE_1 strong'); 
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TIE_1","Frequently Asked Questions(FAQ's)");
    console.log("3");
    await tab.click('[title="Text align"]');
    await tab.waitForSelector('[ng-title="Center"]');
    await tab.click('[ng-title="Center"]');

    // FAQ'S
    // #TIE_3 strong
    await tab.waitForSelector("#TIE_3");
    console.log("1");
    await tab.hover(".bm-col.col-md-12 #TIE_3 strong");
    console.log("11")
    await tab.click('.bm-col.col-md-12.bm-element-state-hover #TIE_3 strong'); 
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TIE_3",FAQ_Array[0]);
    console.log("3");
    await tab.click('[title="Text align"]');
    await tab.waitForSelector('[ng-title="Center"]');
    await tab.click('[ng-title="Center"]');
    // #TE_1
    await tab.hover(".bm-col.col-md-12 #TE_1");
    console.log("10")
    await tab.click('.bm-col.col-md-12.bm-element-state-hover #TE_1'); 
    console.log("11");
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TE_1","A"); 
    console.log("12");
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TE_1",FAQ_Array_Answer[0]); 


    // #TIE_4 strong
    await tab.waitForSelector("#TIE_4");
    console.log("1");
    await tab.hover(".bm-col.col-md-12 #TIE_4 strong");
    console.log("11")
    await tab.click('.bm-col.col-md-12.bm-element-state-hover #TIE_4 strong'); 
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TIE_4",FAQ_Array[1]);
    console.log("3");
    await tab.click('[title="Text align"]');
    await tab.waitForSelector('[ng-title="Center"]');
    await tab.click('[ng-title="Center"]');
    // TE_2
    await tab.hover(".bm-col.col-md-12 #TE_2");
    console.log("10")
    await tab.click('.bm-col.col-md-12.bm-element-state-hover #TE_2'); 
    console.log("11");
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TE_2","A"); 
    console.log("12");
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TE_2",FAQ_Array_Answer[1]); 



    // #TIE_5 strong
    await tab.waitForSelector("#TIE_5");
    console.log("1");
    await tab.hover(".bm-col.col-md-12 #TIE_5 strong");
    console.log("11")
    await tab.click('.bm-col.col-md-12.bm-element-state-hover #TIE_5 strong'); 
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TIE_5",FAQ_Array[2]);
    console.log("3");
    await tab.click('[title="Text align"]');
    await tab.waitForSelector('[ng-title="Center"]');
    await tab.click('[ng-title="Center"]');
    // TE_3
    await tab.hover(".bm-col.col-md-12 #TE_3");
    console.log("10")
    await tab.click('.bm-col.col-md-12.bm-element-state-hover #TE_3'); 
    console.log("11");
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TE_3","A"); 
    console.log("12");
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TE_3",FAQ_Array_Answer[2]); 



    // #TIE_6 strong
    await tab.waitForSelector("#TIE_6");
    console.log("1");
    await tab.hover(".bm-col.col-md-12 #TIE_6 strong");
    console.log("11")
    await tab.click('.bm-col.col-md-12.bm-element-state-hover #TIE_6 strong'); 
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TIE_6",FAQ_Array[3]);
    console.log("3");
    await tab.click('[title="Text align"]');
    await tab.waitForSelector('[ng-title="Center"]');
    await tab.click('[ng-title="Center"]');
    // TE_4
    await tab.hover(".bm-col.col-md-12 #TE_4");
    console.log("10")
    await tab.click('.bm-col.col-md-12.bm-element-state-hover #TE_4'); 
    console.log("11");
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TE_4","A"); 
    console.log("12");
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TE_4",FAQ_Array_Answer[3]); 


    // #TIE_7 strong
    await tab.waitForSelector("#TIE_7");
    console.log("1");
    await tab.hover(".bm-col.col-md-12 #TIE_7 strong");
    console.log("11")
    await tab.click('.bm-col.col-md-12.bm-element-state-hover #TIE_7 strong'); 
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TIE_7",FAQ_Array[4]);
    console.log("3");
    await tab.click('[title="Text align"]');
    await tab.waitForSelector('[ng-title="Center"]');
    await tab.click('[ng-title="Center"]');
    // TE_5
    await tab.hover(".bm-col.col-md-12 #TE_5");
    console.log("10")
    await tab.click('.bm-col.col-md-12.bm-element-state-hover #TE_5'); 
    console.log("11");
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TE_5","A"); 
    console.log("12");
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TE_5",FAQ_Array_Answer[4]); 


    // #TIE_8 strong
    await tab.waitForSelector("#TIE_8");
    console.log("1");
    await tab.hover(".bm-col.col-md-12 #TIE_8 strong");
    console.log("11")
    await tab.click('.bm-col.col-md-12.bm-element-state-hover #TIE_8 strong'); 
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TIE_8",FAQ_Array[5]);
    console.log("3");
    await tab.click('[title="Text align"]');
    await tab.waitForSelector('[ng-title="Center"]');
    await tab.click('[ng-title="Center"]');
    // #TE_6
    await tab.hover(".bm-col.col-md-12 #TE_6");
    console.log("10")
    await tab.click('.bm-col.col-md-12.bm-element-state-hover #TE_6'); 
    console.log("11");
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TE_6","H"); 
    console.log("12");
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TE_6",FAQ_Array_Answer[5]); 

    await saveChanges(tab);
}

async function Editing(tab){

    say.speak("Now Let's start with the editing of your website")
    // await tab.waitForNavigation();
/*
    await tab.click('.bm-gbm-items.active [data-bm-title="Add, move, delete, and edit pages in your website"]');
    let pages = await tab.$$('.ui-sortable .bm-page-list-item.ui-sortable-handle');
    await pages[5].hover();
    let close = await tab.$$('.bm-page-delete');
    await close[8].click('.bm-page-delete');

    await tab.waitForSelector('.bm-dialog-wrapper .bm-dialog-content-wrap');
    await tab.waitForSelector('.bm-dialog-wrapper .bm-dialog-content-wrap .btn.btn-default.btn-dialog-first');
    await tab.waitForTimeout(1000);
    await tab.click('.bm-dialog-wrapper .bm-dialog-content-wrap .btn.btn-default.btn-dialog-first');
*/


// 1.) Title
    await tab.waitForTimeout(5000);
    await tab.waitForSelector("#TIE_1");
    console.log("1");
    await tab.hover(".bm-col.col-md-12 #TIE_1 strong");
    console.log("11")
    await tab.click('.bm-col.col-md-12.bm-element-state-hover #TIE_1 strong'); 
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TIE_1","Jagmeet Blog");
    console.log("3");
    await tab.click('[title="Text align"]');
    await tab.waitForSelector('[ng-title="Center"]');
    await tab.click('[ng-title="Center"]');


    // 2.) SubTitle
    await tab.hover(".bm-col.col-md-12 #TIE_2");
    console.log("4")
    await tab.click('.bm-col.col-md-12.bm-element-state-hover #TIE_2'); 
    console.log("5");
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TIE_2","Jagmeet Blog Subtitle");
    console.log("6");
    await tab.waitForSelector('[title="Text align"]');
    await tab.click('[title="Text align"]');
    await tab.waitForSelector('[ng-title="Center"]');
    await tab.click('[ng-title="Center"]')

    // 3.a) Divs
    // TIE_3
    await tab.hover(".bm-col.col-md-12 #TIE_3 strong");
    console.log("7")
    await tab.click('.bm-col.col-md-12.bm-element-state-hover #TIE_3 strong'); 
    console.log("8");
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TIE_3",div_array_index[0]);
    console.log("9");
    // TE_1 
    await tab.hover(".bm-col.col-md-12 #TE_1");
    console.log("10")
    await tab.click('.bm-col.col-md-12.bm-element-state-hover #TE_1'); 
    console.log("11");
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TE_1","A"); 
    console.log("12");
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TE_1",div_array_index_ans[0]); 


    // 3.b) Divs
    // TIE_4
    await tab.hover(".bm-col.col-md-12 #TIE_4 strong");
    console.log("13")
    await tab.click('.bm-col.col-md-12.bm-element-state-hover #TIE_4 strong'); 
    console.log("14");
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TIE_4",div_array_index[1]);
    console.log("15");
    // TE_2
    await tab.hover(".bm-col.col-md-12 #TE_2");
    console.log("16")
    await tab.click('.bm-col.col-md-12.bm-element-state-hover #TE_2'); 
    console.log("17");
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TE_2","A"); 
    console.log("18");
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TE_2",div_array_index_ans[1]);

    
    // 3.c) Divs
    // TIE_5
    await tab.hover(".bm-col.col-md-12 #TIE_5 strong");
    console.log("13")
    await tab.click('.bm-col.col-md-12.bm-element-state-hover #TIE_5 strong'); 
    console.log("14");
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TIE_5",div_array_index[2]);
    console.log("15");
    // TE_3
    await tab.hover(".bm-col.col-md-12 #TE_3");
    console.log("16")
    await tab.click('.bm-col.col-md-12.bm-element-state-hover #TE_3'); 
    console.log("17");
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TE_3","A"); 
    console.log("18");
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TE_3",div_array_index_ans[2]);

    // 3.d) Divs
    // TIE_6
    await tab.hover(".bm-col.col-md-12 #TIE_6 strong");
    console.log("13")
    await tab.click('.bm-col.col-md-12.bm-element-state-hover #TIE_6 strong'); 
    console.log("14");
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TIE_6",div_array_index[3]);
    console.log("15");
    // TE_4
    await tab.hover(".bm-col.col-md-12 #TE_4");
    console.log("16")
    await tab.click('.bm-col.col-md-12.bm-element-state-hover #TE_4'); 
    console.log("17");
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TE_4","A"); 
    console.log("18");
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TE_4",div_array_index_ans[4]);


    // 3.e) Divs
    // TIE_7
    await tab.hover(".bm-col.col-md-12 #TIE_7 strong");
    console.log("13")
    await tab.click('.bm-col.col-md-12.bm-element-state-hover #TIE_7 strong'); 
    console.log("14");
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TIE_7",div_array_index[4]);
    console.log("15");
    // TE_5
    await tab.hover(".bm-col.col-md-12 #TE_5");
    console.log("16")
    await tab.click('.bm-col.col-md-12.bm-element-state-hover #TE_5'); 
    console.log("17");
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TE_5","A"); 
    console.log("18");
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TE_5",div_array_index_ans[4]);

    // 3.f) Divs
    // TIE_8
    await tab.hover(".bm-col.col-md-12 #TIE_8 strong");
    console.log("13")
    await tab.click('.bm-col.col-md-12.bm-element-state-hover #TIE_8 strong'); 
    console.log("14");
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TIE_8",div_array_index[5]);
    console.log("15");
    // TE_6
    await tab.hover(".bm-col.col-md-12 #TE_6");
    console.log("16")
    await tab.click('.bm-col.col-md-12.bm-element-state-hover #TE_6'); 
    console.log("17");
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TE_6","A"); 
    console.log("18");
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TE_6",div_array_index_ans[5]);

    // TiTle 2
    // TIE_9
    await tab.waitForSelector("#TIE_9");
    console.log("1");
    await tab.hover(".bm-col.col-md-12 #TIE_9 strong");
    console.log("11")
    await tab.click('.bm-col.col-md-12.bm-element-state-hover #TIE_9 strong'); 
    console.log("2");
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TIE_9","Title 2 Jagmeet Blog");
    console.log("3");
    await tab.click('[title="Text align"]');
    await tab.waitForSelector('[ng-title="Center"]');
    await tab.click('[ng-title="Center"]')

    // SubTitle
    // TIE_10
    await tab.waitForSelector("#TIE_10");
    console.log("1");
    await tab.hover(".bm-col.col-md-12 #TIE_10");
    console.log("11")
    await tab.click('.bm-col.col-md-12.bm-element-state-hover #TIE_10'); 
    console.log("2");
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TIE_10","Sub-Title 2 Jagmeet Blog");
    console.log("3");
    await tab.click('[title="Text align"]');
    await tab.waitForSelector('[ng-title="Center"]');
    await tab.click('[ng-title="Center"]')

    // Title 3
    // TIE_28
    await tab.waitForSelector("#TIE_11");
    console.log("1");
    await tab.hover(".bm-col.col-md-12 #TIE_11 strong");
    console.log("11")
    await tab.click('.bm-col.col-md-12.bm-element-state-hover #TIE_11 strong'); 
    console.log("2");
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TIE_11","Title 3 Jagmeet Blog");
    console.log("3");
    await tab.click('[title="Text align"]');
    await tab.waitForSelector('[ng-title="Center"]');
    await tab.click('[ng-title="Center"]')

    // SubTitle
    // #TE_7 p
    await tab.waitForSelector("#TE_7");
    console.log("1");
    await tab.hover(".bm-col.col-md-12 #TE_7 p");
    console.log("11")
    await tab.click('.bm-col.col-md-12.bm-element-state-hover #TE_7 p'); 
    console.log("2");
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TE_7","SubTitle 3 Jagmeet Blog");
    console.log("3");
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TE_7","SubTitle 3 Jagmeet Blog");
    await tab.click('[title="Text align"]');
    await tab.waitForSelector('[ng-title="Center"]');
    await tab.click('[ng-title="Center"]')

    await tab.waitForSelector('.bm-col.col-md-12 [data-module="text_number"]');
    let data = await tab.$$('.bm-col.col-md-12 [data-module="text_number"]');
    
    for(let i=0;i<data.length;i++){
        await data[i].hover();
        await tab.click('.bm-col.col-md-12.bm-element-state-hover [data-module="text_number"]');
        await tab.keyboard.down("Control");
        await tab.keyboard.press("A");
        await tab.keyboard.press("X");
        await tab.keyboard.up("Control");
        await data[i].type(SiteInformation[i]);
    }

    await tab.waitForSelector('.bm-col.col-md-12 #TIE_12 strong');
    await tab.waitForSelector("#TIE_12");
    await tab.hover(".bm-col.col-md-12 #TIE_12 strong");
    await tab.click('.bm-col.col-md-12.bm-element-state-hover #TIE_12 strong'); 
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TIE_12",SiteInformationIndex[0]);

    await tab.waitForSelector('.bm-col.col-md-12 #TIE_13 strong');
    await tab.waitForSelector("#TIE_13");
    await tab.hover(".bm-col.col-md-12 #TIE_13 strong");
    await tab.click('.bm-col.col-md-12.bm-element-state-hover #TIE_13 strong'); 
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TIE_13",SiteInformationIndex[1]);

    await tab.waitForSelector('.bm-col.col-md-12 #TIE_14 strong');
    await tab.waitForSelector("#TIE_14");
    await tab.hover(".bm-col.col-md-12 #TIE_14 strong");
    await tab.click('.bm-col.col-md-12.bm-element-state-hover #TIE_14 strong'); 
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TIE_14",SiteInformationIndex[2]);

    await tab.waitForSelector('.bm-col.col-md-12 #TIE_15 strong');
    await tab.waitForSelector("#TIE_14");
    await tab.hover(".bm-col.col-md-12 #TIE_15 strong");
    await tab.click('.bm-col.col-md-12.bm-element-state-hover #TIE_15 strong'); 
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TIE_15",SiteInformationIndex[3]);


    await tab.waitForSelector('.bm-col.col-md-12 .wrapper ul[data-module="social_media"]');
    let social = await tab.$$('.bm-col.col-md-12 .wrapper ul[data-module="social_media"]');
    await social[0].hover();
    await tab.click('.bm-col.col-md-12.bm-element-state-hover .wrapper ul[data-module="social_media"]'); 
    await tab.click('.bm-col.col-md-12 [title="Settings"]');

    let social_url = await tab.$$('input[ng-model="media.link"]');
    let social_count=0;
    for(let key in social_media_urls){
        await social_url[social_count].click();
        await tab.keyboard.down("Control");
        await tab.keyboard.press("A");
        await tab.keyboard.press("X");
        await tab.keyboard.up("Control");
        await social_url[social_count].type(social_media_urls[key]);
        social_count++;
    }

    // TIE_17
    await tab.waitForSelector("#TIE_17");
    await tab.hover(".bm-col.col-md-12 strong");
    await tab.click('.bm-col.col-md-12.bm-element-state-hover strong'); 
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TIE_17","J");
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TIE_17","Jagmeet Blog");
    await tab.click('[title="Text align"]');
    await tab.waitForSelector('[ng-title="Center"]');
    await tab.click('[ng-title="Center"]')


    // SubTitle
    // #TE_7
    await tab.waitForSelector("#TE_8");
    console.log("1");
    await tab.hover(".bm-col.col-md-12 #TE_8 p");
    console.log("11")
    await tab.click('.bm-col.col-md-12.bm-element-state-hover #TE_8 p'); 
    console.log("2");
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TE_8","SubTitle 4 Jagmeet Blog");
    console.log("3");
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.keyboard.up("Control");
    await tab.type(".bm-col.col-md-12 #TE_8","SubTitle 4 Jagmeet Blog");
    await tab.click('[title="Text align"]');
    await tab.waitForSelector('[ng-title="Center"]');
    await tab.click('[ng-title="Center"]');


    // Now save changes and Publish 
    await saveChanges(tab);
   


    // Contact Editing
    await tab.hover('[data-order="2"] a');
    await tab.click('[data-order="2"] a');
    await EditingContact(tab);


    // Contact Editing
    await tab.hover('[data-order="3"] a');
    await tab.click('[data-order="3"] a');
    await EditingAbout(tab);

    // FAQ Editing
    await tab.hover('[data-order="5"] a');
    await tab.click('[data-order="5"] a');
    await EditingFAQ(tab);

    await tab.waitForTimeout(2000);
    await tab.waitForSelector('.bm-publish-hook.bm-ic-w.bm-ic-gray');
    await tab.click('.bm-publish-hook.bm-ic-w.bm-ic-gray');
    console.log("PUBLISH BUTTON CLICKED");
    
    try{
        await tab.waitForSelector('.bm-popup-tube .bm-publish.bm-publish-success.bm-publish-white i[aria-hidden="true"]');
        await tab.waitForTimeout(1000);
        let s = await tab.$$('.bm-publish-do-publish');
        await s[2].click();
        console.log("PUBLISH ANYWAY CLICKED");
    }catch{
        console.log("No PUBLISH ANYWAY CLICKED");
    }

    await tab.waitForSelector('.bm-popup-tube .fa.fa-check-circle.fa-ai-blue[aria-hidden="true"]');
    await tab.waitForSelector('.bm-popup-tube .bm-publish.bm-publish-success.bm-publish-white .bm-publish-opts .bm-publish-opts-link a');
    let urls = await tab.$$('.bm-popup-tube .bm-publish.bm-publish-success.bm-publish-white .bm-publish-opts .bm-publish-opts-link a');
    console.log("Website Length:"+urls.length);
    
    let arr=[];
    for(let i=0;i<urls.length;i++){
        url = await tab.evaluate(function(e){
            return e.getAttribute('href');
        },urls[i]);
        arr.push(url);
    }

    console.log("Website Link: "+arr);

}

main();