import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
import PageHeaderImage from "../../assets/images/bannerforall1.jpg";
import AboutPageHeaderImage from "../../assets/images/banner.jpg";
import HeaderImage from "../../assets/images/bannerforall.jpg";
import AppointmentImage from "../../assets/images/Appointment.jpg";
import CustomerImage from "../../assets/images/CustomerService.jpg";
import ColdImage from "../../assets/images/Cold.jpg";
import SalesImage from "../../assets/images/sales.jpg";
import B2BImage from "../../assets/images/B2B.jpg";
import MedicareImage from "../../assets/images/Medicare.jpg";
import FinalImage from "../../assets/images/FinalExpense.jpg";
import HealthImage from "../../assets/images/HealthInsurance.jpg";


const AppContext = React.createContext();


const initialState = {

    title:"",
    subTitle:"",
    ParaTitle:"",
    ParaSubtitle:"",
    ButtonText:"",
    image:"",
    imagePageHeader:"",
    para1:"",
    para2:"",
    benifitsPara:""
};


const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const updateContactPage = () => {

        return dispatch({
            type:"CONTACT_PAGE",
            payload:{
                title:"CONTACT US",
                subTitle:"Home",
                imagePageHeader:`${PageHeaderImage}`
            }
        })
    }


    const updateAboutPage = () => {

        return dispatch({
            type:"ABOUT_PAGE",
            payload:{
                title:"ABOUT",
                subTitle:"Home",
                imagePageHeader:`${AboutPageHeaderImage}`
            }
        })
    }




    const HealthInsurancePPC = () =>{
        return dispatch({
            type:"HealthInsurancePage",
            payload:{
                title:"Health Insurance PPC",
                subTitle:"Home",
                ParaTitle:"Health Insurance PPC",
                ParaSubtitle:"",
                image:`${HealthImage}`,
                imagePageHeader:`${HeaderImage}`,
                ButtonText:"Contact us",
                para1:`To run a successful health insurance campaign, it is important to establish and monitor key performance indicators (KPIs), test for quality assurance, and recognize the audience's needs when creating effective calls to action. Healthcare call centers need to overcome challenges such as understanding insurance and seeking treatment. best practices for new patients include identifying and documenting goals, starting migration in small steps, providing proper onboarding, and using technology to improve patient experience.`,
                para2:`Inbound call generation for health insurance, achieved through high-intent health insurance exclusive inbound calls primarily driven by search, display, and native ad placements offering a new service or product during an inbound call, can make the customer feel special and generate high-quality leads. sales techniques that increase success on health insurance inbound calls include knowing your customer, asking the right questions and keeping it simple, building rapport with the customer, and being prepared to handle objections. Our insurance agents are driving inbound calls by using tips such as creating a sense of urgency in their messaging and offering free quotes or consultations.`,
                benifitsPara:`Health insurance Preferred Provider Organization (PPO) plans offer a range of benefits that make them an attractive option for individuals and families seeking comprehensive healthcare coverage. One of the key advantages of PPO plans is the flexibility they provide in choosing healthcare providers. With a call-wide network of doctors, specialists, and hospitals, individuals have the freedom to select their preferred healthcare professionals without the need for referrals from a primary care physician. Moreover, PPO plans offer coverage for out-of-network services, albeit at higher costs, ensuring access to care even when providers are not within the network. In-network providers typically offer discounted rates, resulting in lower out-of-pocket expenses for services such as office visits and procedures. Unlike Health Maintenance Organization (HMO) plans, PPO plans do not require individuals to select a primary care physician or obtain referrals for specialist care, granting them greater autonomy in managing their healthcare needs`
            }
        })
    }  



    const FinalExpense = () =>{
        return dispatch({
            type:"FinalExpensePage",
            payload:{
                title:"Final Expense",
                subTitle:"Home",
                ParaTitle:"Final Expense",
                ParaSubtitle:"",
                image:`${FinalImage}`,
                imagePageHeader:`${HeaderImage}`,
                ButtonText:"Contact us",
                para1:`Click-to-call lead generation is a tactic used in inbound marketing strategies. It involves using a dedicated Facebook call capture/tracking phone number to generate leads from Facebook Ads Business Nucleus offers click-to-call as part of their marketing services. Other effective strategies for lead generation include webinars, SEO, and content marketing.`,
                para2:`The strategies for click-to-call lead generation include creating a new lead generation campaign in Ads Manager and selecting phone as the "lead method" under the ad set settings Using a dedicated Facebook call capture/tracking phone number is also important for generating leads from call-now ad units Business Nucleus offers click-to-call as an effective tactic within their marketing services.`,
                benifitsPara:`
                Final expense insurance, also known as burial insurance or funeral insurance, provides coverage for the costs associated with a person's funeral, burial, or other final expenses. This type of insurance offers several benefits to individuals and their families. Firstly, final expense insurance alleviates the financial burden on loved ones during a difficult time by covering funeral expenses, which can include the cost of the casket, burial plot, funeral service, cremation, and other related costs. By having this coverage in place, individuals can ensure that their final wishes are carried out without imposing financial strain on their family members. Additionally, final expense insurance typically requires minimal underwriting, making it accessible to individuals who may have difficulty obtaining traditional life insurance due to age or health issues.`
            }
        })
    }  




    const MedicareSupplementAdvantage = () =>{
        return dispatch({
            type:"MedicareSupplementAdvantagePage",
            payload:{
                title:"Medicare Supplement",
                subTitle:"Home",
                ParaTitle:"Medicare Supplement/Advantage",
                ParaSubtitle:"",
                image:`${MedicareImage}`,
                imagePageHeader:`${HeaderImage}`,
                ButtonText:"Contact us",
                para1:`
                We run a Medicare supplement and advantage campaign. Custom calling campaigns can be created for live transfer leads, and sales scripts can also be used to effectively sell Medicare insurance and set appointments with potential customers Live transfer sales leads for Medicare supplements are purchased from call center providers and top vendors for Medicare supplements and advantage leads include those that offer call center telesales and custom marketing campaigns.
                `,
                para2:`Inbound call generation for Medicare supplement and advantage achieved through a combination of outbound and inbound marketing tactics such as email marketing, real-time inbound phone calls, remarketing, seminars, and in-person events, agents can also generate their own Medicare leads by using outbound and inbound phone calls, direct mail campaigns, digital advertising, and social media outreach.`,
                benifitsPara:`
                Medicare Supplement (Medigap) and Medicare Advantage plans offer crucial benefits to individuals seeking additional coverage beyond Original Medicare. Medigap plans to provide supplemental coverage to fill the gaps in original Medicare, such as copayments, coinsurance, and deductibles. This offers financial protection and peace of mind by reducing out-of-pocket expenses for healthcare services. Additionally, Medigap plans often provide coverage for services received outside the United States, which can be beneficial for travelers. Furthermore, Medigap policies allow individuals to see any healthcare provider that accepts Medicare, providing flexibility and choice in healthcare options.`
            }
        })
    }  




    const B2BLeadGeneration = () =>{
        return dispatch({
            type:"B2BLeadGenerationPage",
            payload:{
                title:"B2B Lead Generation",
                subTitle:"Home",
                ParaTitle:"B2B Lead Generation",
                ParaSubtitle:"",
                image:`${B2BImage}`,
                imagePageHeader:`${HeaderImage}`,
                ButtonText:"Contact us",
                para1:`B2B lead generation is the process of identifying ideal customers for a product or service and attracting them to buy it. It is an essential activity for businesses that primarily sell to other businesses. Demand generation teams share relevant leads with sales, while sales can gain leads directly through their actions, such as emailing. B2B marketers like us use various inbound marketing strategies to drive prospective customers to their organization organically. Expert-approved B2B lead generation strategies include content marketing, LinkedIn, well-timed Google Ads, webinars, and email marketing.`,
                para2:` Other B2B lead generation strategies include content marketing, LinkedIn, well-timed Google Ads, webinars, email marketing, referral programs, and effective lead capture processes, Other B2B lead generation ideas include social media advertising, influencer marketing, account-based marketing (ABM), trade shows and events, and customer reviews To be consistently successful in B2B lead generation, it is important to approach the content strategy from the perspective of the customer and understand what typical B2B buyers are looking for.
                `,
                benifitsPara:`
                B2B lead generation strategies are vital for businesses looking to expand their customer base and increase sales in the business-to-business (B2B) market. One effective approach involves leveraging targeted marketing campaigns tailored to specific industries or market segments. By identifying and focusing on potential clients within these niches, businesses can better tailor their messaging and offerings to meet the unique needs and pain points of their target audience, thus increasing the likelihood of generating qualified leads. Additionally, utilizing content marketing tactics such as creating informative blog posts, whitepapers, case studies, and webinars can help position a company as an industry thought leader and attract potential leads organically. Providing valuable content that addresses common challenges or offers solutions to industry-specific problems can establish credibility and trust with potential clients, ultimately driving them to engage with the business and inquire about its products or services.`
            }
        })
    }  


    const CustomerService = () =>{
        return dispatch({
            type:"CustomerService",
            payload:{
                title:"Customer Service",
                subTitle:"Home",
                ParaTitle:"Special Customer Service",
                ParaSubtitle:"",
                image:`${CustomerImage}`,
                imagePageHeader:`${HeaderImage}`,
                ButtonText:"Contact us",
                para1:`Customer service refers to the assistance and support provided to customers before, during, and after they purchase a product or service. It encompasses a wide range of activities and interactions aimed at ensuring customer satisfaction and fostering positive relationships between customers and a business or organization. Excellent customer service is essential for businesses to attract and retain customers, differentiate themselves from competitors, and build a strong reputation for quality and reliability. It plays a crucial role in enhancing the overall customer experience and driving long-term success. `,
                ServiceTitle:"More About Customer Service",
                ServiceContent:`Customer service refers to the assistance and support provided to customers before, 
                during, and after they purchase a product or service. It encompasses a wide range of 
                activities and 
                interactions aimed at ensuring customer satisfaction and fostering positive 
                relationships between customers and a business or organization.`,
                // para2:`B2B lead generation strategies include content marketing, LinkedIn, well-timed Google Ads, webinars, email marketing, referral programs, and effective lead capture processes, other B2B lead generation ideas include social media advertising, influencer marketing, account-based marketing (ABM), trade shows and events, and customer reviews to be consistently successful in B2B lead generation, it is important to approach the content strategy from the perspective of the customer and understand what typical B2B buyers are looking for.`,
                // benifitsPara:`
                // B2B lead generation strategies are vital for businesses looking to expand their customer base and increase sales in the business-to-business (B2B) market. One effective approach involves leveraging targeted marketing campaigns tailored to specific industries or market segments. By identifying and focusing on potential clients within these niches, businesses can better tailor their messaging and offerings to meet the unique needs and pain points of their target audience, thus increasing the likelihood of generating qualified leads.
                // Additionally, utilizing content marketing tactics such as creating informative blog posts, whitepapers, case studies, and webinars can help position a company as an industry thought leader and attract potential leads organically. Providing valuable content that addresses common challenges or offers solutions to industry-specific problems can establish credibility and trust with potential clients, ultimately driving them to engage with the business and inquire about its products or services.`
            }
        })
    } 


    const AppointmentSetting = () =>{
        return dispatch({
            type:"AppointmentSetting",
            payload:{
                title:"Appointment Setting",
                subTitle:"Home",
                ParaTitle:"About Appointment Setting",
                ParaSubtitle:"",
                image:`${AppointmentImage}`,
                imagePageHeader:`${HeaderImage}`,
                ButtonText:"Contact us",
                para1:`
                Appointment setting serves as the bridge between initial contact and meaningful engagement, enabling sales teams to cultivate relationships and demonstrate value. Through strategic scheduling, sales professionals can tailor their approach to address the specific needs and interests of each prospect, maximizing the likelihood of conversion. This proactive outreach not only accelerates the sales cycle but also helps in qualifying leads and identifying high-potential opportunities. By effectively managing appointments, businesses can optimize their resources and allocate time and effort where it's most impactful, ultimately driving revenue growth and business success. In essence, appointment setting is more than just arranging meetings—it's a strategic endeavor that fuels the entire sales ecosystem, fostering connections that lead to mutually beneficial outcomes.
                `,
                ServiceTitle:"More About Appointment Setting",
                ServiceContent:`
                Appointment setting requires careful planning and a deep understanding of both the product or service being offered and the needs of the potential client. Successful appointment setters often excel in communication skills, persuasion techniques, and the ability to build rapport quickly. They leverage various channels such as phone calls, emails, and social media to reach prospects and secure appointments`,
                // para2:`B2B lead generation strategies include content marketing, LinkedIn, well-timed Google Ads, webinars, email marketing, referral programs, and effective lead capture processes, other B2B lead generation ideas include social media advertising, influencer marketing, account-based marketing (ABM), trade shows and events, and customer reviews to be consistently successful in B2B lead generation, it is important to approach the content strategy from the perspective of the customer and understand what typical B2B buyers are looking for.`,
                // benifitsPara:`
                // B2B lead generation strategies are vital for businesses looking to expand their customer base and increase sales in the business-to-business (B2B) market. One effective approach involves leveraging targeted marketing campaigns tailored to specific industries or market segments. By identifying and focusing on potential clients within these niches, businesses can better tailor their messaging and offerings to meet the unique needs and pain points of their target audience, thus increasing the likelihood of generating qualified leads.
                // Additionally, utilizing content marketing tactics such as creating informative blog posts, whitepapers, case studies, and webinars can help position a company as an industry thought leader and attract potential leads organically. Providing valuable content that addresses common challenges or offers solutions to industry-specific problems can establish credibility and trust with potential clients, ultimately driving them to engage with the business and inquire about its products or services.`
            }
        })
    } 

    const coldCalling = () =>{
        return dispatch({
            type:"coldCalling",
            payload:{
                title:"Cold Calling",
                subTitle:"Home",
                ParaTitle:"About Cold Calling Process",
                ParaSubtitle:"",
                image:`${ColdImage}`,
                imagePageHeader:`${HeaderImage}`,
                ButtonText:"Contact us",
                para1:`
                Cold calling is a sales technique where a salesperson makes unsolicited calls to prospective customers with whom they have had no prior contact. The term "cold" refers to the fact that the salesperson is reaching out to individuals who are not expecting their call and may not have any prior knowledge of the product or service being offered. The purpose of cold calling is to generate leads, initiate sales conversations, and ultimately secure appointments or sales. Businesses actively use SEO to expand their customer base, promote new products or services, and reach out to specific target markets.
                `,
                ServiceTitle:"More About Cold Calling Process",
                ServiceContent:`
                Appointment setting requires careful planning and a deep understanding of both the product or service being offered and the needs of the potential client. Successful appointment setters often excel in communication skills, persuasion techniques, and the ability to build rapport quickly. They leverage various channels such as phone calls, emails, and social media to reach prospects and secure appointments`,
                // para2:`B2B lead generation strategies include content marketing, LinkedIn, well-timed Google Ads, webinars, email marketing, referral programs, and effective lead capture processes, other B2B lead generation ideas include social media advertising, influencer marketing, account-based marketing (ABM), trade shows and events, and customer reviews to be consistently successful in B2B lead generation, it is important to approach the content strategy from the perspective of the customer and understand what typical B2B buyers are looking for.`,
                // benifitsPara:`
                // B2B lead generation strategies are vital for businesses looking to expand their customer base and increase sales in the business-to-business (B2B) market. One effective approach involves leveraging targeted marketing campaigns tailored to specific industries or market segments. By identifying and focusing on potential clients within these niches, businesses can better tailor their messaging and offerings to meet the unique needs and pain points of their target audience, thus increasing the likelihood of generating qualified leads.
                // Additionally, utilizing content marketing tactics such as creating informative blog posts, whitepapers, case studies, and webinars can help position a company as an industry thought leader and attract potential leads organically. Providing valuable content that addresses common challenges or offers solutions to industry-specific problems can establish credibility and trust with potential clients, ultimately driving them to engage with the business and inquire about its products or services.`
            }
        })
    } 

    const sales = () =>{
        return dispatch({
            type:"sales",
            payload:{
                title:"Sales",
                subTitle:"Home",
                ParaTitle:"About Sales and Services",
                ParaSubtitle:"",
                image:`${SalesImage}`,
                imagePageHeader:`${HeaderImage}`,
                ButtonText:"Contact us",
                para1:`
                Sales refers to the process of persuading, convincing, and ultimately securing commitments from potential customers to purchase products or services offered by a business. It involves a series of interactions and activities aimed at identifying, attracting, engaging, and converting leads into paying customers.  Customer service can be delivered through various channels, including in-person interactions, phone calls, emails, live chat, social media, and self-service portals. Companies prioritizing excellent customer service often see higher customer satisfaction levels, increased customer loyalty, and positive word-of-mouth recommendations, which can contribute to long-term business success.
                `,
                ServiceTitle:"More About Sales and Services",
                ServiceContent:`
                Appointment setting requires careful planning and a deep understanding of both the product or service being offered and the needs of the potential client. Successful appointment setters often excel in communication skills, persuasion techniques, and the ability to build rapport quickly. They leverage various channels such as phone calls, emails, and social media to reach prospects and secure appointments`,
                // para2:`B2B lead generation strategies include content marketing, LinkedIn, well-timed Google Ads, webinars, email marketing, referral programs, and effective lead capture processes, other B2B lead generation ideas include social media advertising, influencer marketing, account-based marketing (ABM), trade shows and events, and customer reviews to be consistently successful in B2B lead generation, it is important to approach the content strategy from the perspective of the customer and understand what typical B2B buyers are looking for.`,
                // benifitsPara:`
                // B2B lead generation strategies are vital for businesses looking to expand their customer base and increase sales in the business-to-business (B2B) market. One effective approach involves leveraging targeted marketing campaigns tailored to specific industries or market segments. By identifying and focusing on potential clients within these niches, businesses can better tailor their messaging and offerings to meet the unique needs and pain points of their target audience, thus increasing the likelihood of generating qualified leads.
                // Additionally, utilizing content marketing tactics such as creating informative blog posts, whitepapers, case studies, and webinars can help position a company as an industry thought leader and attract potential leads organically. Providing valuable content that addresses common challenges or offers solutions to industry-specific problems can establish credibility and trust with potential clients, ultimately driving them to engage with the business and inquire about its products or services.`
            }
        })
    } 






    return (
        <AppContext.Provider

        value={{...state, updateContactPage,HealthInsurancePPC,FinalExpense,
            MedicareSupplementAdvantage,B2BLeadGeneration,updateAboutPage,CustomerService,
            AppointmentSetting,coldCalling,sales}}>

        {children}
            
        </AppContext.Provider>
    );


    
};


const useGlobalContext = () => {
    return useContext(AppContext);
  };
  
// eslint-disable-next-line react-refresh/only-export-components
  export { AppContext, AppProvider, useGlobalContext };

