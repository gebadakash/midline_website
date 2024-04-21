
const reducer = (state,action) => {

    if(action.type ==="CONTACT_PAGE"){

        return {
            ...state,
            title:action.payload.title,
            subTitle:action.payload.subTitle,
            imagePageHeader:action.payload.imagePageHeader,
        }
    }

    if(action.type ==="ABOUT_PAGE"){

        return {
            ...state,
            title:action.payload.title,
            subTitle:action.payload.subTitle,
            imagePageHeader:action.payload.imagePageHeader,
        }
    }


    if(action.type ==="HealthInsurancePage"){

        return {
            ...state,
            title:action.payload.title,
            subTitle:action.payload.subTitle,
            ParaTitle:action.payload.ParaTitle,
            ParaSubtitle:action.payload.ParaSubtitle,
            imagePageHeader:action.payload.imagePageHeader,
            image:action.payload.image,
            ButtonText:action.payload.ButtonText,
            para1:action.payload.para1,
            para2:action.payload.para2,
            benifitsPara:action.payload.benifitsPara

        }
    }

    if(action.type ==="FinalExpensePage"){

        return {
            ...state,
            title:action.payload.title,
            subTitle:action.payload.subTitle,
            ParaTitle:action.payload.ParaTitle,
            ParaSubtitle:action.payload.ParaSubtitle,
            imagePageHeader:action.payload.imagePageHeader,
            image:action.payload.image,
            ButtonText:action.payload.ButtonText,
            para1:action.payload.para1,
            para2:action.payload.para2,
            benifitsPara:action.payload.benifitsPara
            
            
        }
    }


    if(action.type ==="MedicareSupplementAdvantagePage"){

        return {
            ...state,
            title:action.payload.title,
            subTitle:action.payload.subTitle,
            ParaTitle:action.payload.ParaTitle,
            ParaSubtitle:action.payload.ParaSubtitle,
            imagePageHeader:action.payload.imagePageHeader,
            image:action.payload.image,
            ButtonText:action.payload.ButtonText,
            para1:action.payload.para1,
            para2:action.payload.para2,
            benifitsPara:action.payload.benifitsPara
            
            
        }
    }


    if(action.type ==="B2BLeadGenerationPage"){

        return {
            ...state,
            title:action.payload.title,
            subTitle:action.payload.subTitle,
            ParaTitle:action.payload.ParaTitle,
            ParaSubtitle:action.payload.ParaSubtitle,
            imagePageHeader:action.payload.imagePageHeader,
            image:action.payload.image,
            ButtonText:action.payload.ButtonText,
            para1:action.payload.para1,
            para2:action.payload.para2,
            benifitsPara:action.payload.benifitsPara
            
            
        }
    }

    if(action.type ==="CustomerService"){

        return {
            ...state,
            title:action.payload.title,
            subTitle:action.payload.subTitle,
            ParaTitle:action.payload.ParaTitle,
            ParaSubtitle:action.payload.ParaSubtitle,
            imagePageHeader:action.payload.imagePageHeader,
            image:action.payload.image,
            ButtonText:action.payload.ButtonText,
            para1:action.payload.para1,
            ServiceTitle:action.payload.ServiceTitle,
            ServiceContent:action.payload.ServiceContent
            // para2:action.payload.para2,
            // benifitsPara:action.payload.benifitsPara
            
            
        }
    }

    if(action.type ==="AppointmentSetting"){

        return {
            ...state,
            title:action.payload.title,
            subTitle:action.payload.subTitle,
            ParaTitle:action.payload.ParaTitle,
            ParaSubtitle:action.payload.ParaSubtitle,
            imagePageHeader:action.payload.imagePageHeader,
            image:action.payload.image,
            ButtonText:action.payload.ButtonText,
            para1:action.payload.para1,
            ServiceTitle:action.payload.ServiceTitle,
            ServiceContent:action.payload.ServiceContent,
            
            // para2:action.payload.para2,
            // benifitsPara:action.payload.benifitsPara
            
            
        }
    }

    if(action.type ==="coldCalling"){

        return {
            ...state,
            title:action.payload.title,
            subTitle:action.payload.subTitle,
            ParaTitle:action.payload.ParaTitle,
            ParaSubtitle:action.payload.ParaSubtitle,
            imagePageHeader:action.payload.imagePageHeader,
            image:action.payload.image,
            ButtonText:action.payload.ButtonText,
            para1:action.payload.para1,
            ServiceTitle:action.payload.ServiceTitle,
            ServiceContent:action.payload.ServiceContent,
            
            // para2:action.payload.para2,
            // benifitsPara:action.payload.benifitsPara
            
            
        }
    }

    if(action.type ==="sales"){

        return {
            ...state,
            title:action.payload.title,
            subTitle:action.payload.subTitle,
            ParaTitle:action.payload.ParaTitle,
            ParaSubtitle:action.payload.ParaSubtitle,
            imagePageHeader:action.payload.imagePageHeader,
            image:action.payload.image,
            ButtonText:action.payload.ButtonText,
            para1:action.payload.para1,
            ServiceTitle:action.payload.ServiceTitle,
            ServiceContent:action.payload.ServiceContent,
            
            // para2:action.payload.para2,
            // benifitsPara:action.payload.benifitsPara
            
            
        }
    }



    return state;
}

export default reducer
