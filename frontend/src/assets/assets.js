import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import doc16 from './doc16.png'
import doc17 from './doc17.png'
import doc18 from './doc18.png'
import doc19 from './doc19.png'
import doc20 from './doc20.png'
import doc21 from './doc21.png'
import doc22 from './doc22.png'
import doc23 from './doc23.png'
import doc24 from './doc24.png'
import doc25 from './doc25.png'
import Dermatologist from './Dermatologist.jpg'
import Cardiologist from './Cardiologist.jpg'
import General_physician from './Generalphysician.jpg'
import Gynecologist from './Gynaecologist.jpg'
import Neurologist from './Neurologist.jpg'
import Pediatricians from './Pediatrician.jpg'
import Dentist from './Dentist.jpg'
import Orthopaedic  from './Orthopaedic.jpg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General Physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatrician',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Cardiologist',
        image: Cardiologist
    },
    {
        speciality: 'Dentist',
        image: Dentist
    },
    {
        speciality: 'Orthopedic Surgeon',
        image: Orthopaedic 
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Richard James',
        image: doc1,
        speciality: 'General Physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Emily Larson',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Sarah Patel',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Christopher Lee',
        image: doc4,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Jennifer Garcia',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Andrew Williams',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Christopher Davis',
        image: doc7,
        speciality: 'General Physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Timothy White',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Ava Mitchell',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Jeffrey King',
        image: doc10,
        speciality: 'Pediatrician',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Zoe Kelly',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Patrick Harris',
        image: doc12,
        speciality: 'Pediatrician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Chloe Evans',
        image: doc13,
        speciality: 'General Physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Ryan Martinez',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Amelia Hill',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc16',
        name: 'Dr. Emily Carter',
        image: doc16,
        speciality: 'Cardiologist',
        degree: 'MD, DM Cardiology',
        experience: '10 Years',
        about: 'Dr. Emily Carter is a highly skilled cardiologist with expertise in managing complex heart conditions. She is dedicated to providing personalized care, focusing on advanced diagnostic techniques and minimally invasive treatments.',
        fees: 120,
        address: {
            line1: '45th Avenue, Heartland',
            line2: 'Central Square, New York'
        }
    },
    {
        _id: 'doc17',
        name: 'Dr. Michael Thompson',
        image: doc17,
        speciality: 'Cardiologist',
        degree: 'MBBS, MRCP',
        experience: '8 Years',
        about: 'Dr. Michael Thompson specializes in preventive cardiology and heart failure management. He is passionate about educating patients on heart health and implementing evidence-based treatments for optimal outcomes.',
        fees: 100,
        address: {
            line1: '12th Street, Green Valley',
            line2: 'Downtown, Chicago'
        }
    },
    {
        _id: 'doc18',
        name: 'Dr. Sarah Johnson',
        image: doc18,
        speciality: 'Cardiologist',
        degree: 'MBBS, DM Cardiology',
        experience: '12 Years',
        about: 'Dr. Sarah Johnson is a renowned cardiologist with extensive experience in interventional cardiology. She is committed to delivering cutting-edge treatments and improving the quality of life for her patients.',
        fees: 150,
        address: {
            line1: '8th Cross, Riverside',
            line2: 'Lakeview, Los Angeles'
        }
    },
    {
        _id: 'doc19',
        name: 'Dr. Olivia Brown',
        image: doc19,
        speciality: 'Dentist',
        degree: 'BDS, MDS',
        experience: '7 Years',
        about: 'Dr. Olivia Brown is a skilled dentist with expertise in cosmetic dentistry and orthodontics. She is dedicated to providing pain-free dental care and creating beautiful smiles for her patients.',
        fees: 80,
        address: {
            line1: '22nd Street, Smile Avenue',
            line2: 'Downtown, San Francisco'
        }
    },
    {
        _id: 'doc20',
        name: 'Dr. James Wilson',
        image: doc20,
        speciality: 'Dentist',
        degree: 'BDS, FDS RCS',
        experience: '9 Years',
        about: 'Dr. James Wilson specializes in restorative dentistry and dental implants. He is passionate about helping patients achieve optimal oral health and confidence in their smiles.',
        fees: 90,
        address: {
            line1: '15th Cross, Pearl Road',
            line2: 'Uptown, Boston'
        }
    },
    {
        _id: 'doc21',
        name: 'Dr. Sophia Lee',
        image: doc21,
        speciality: 'Dentist',
        degree: 'BDS, MDS Orthodontics',
        experience: '5 Years',
        about: 'Dr. Sophia Lee is an experienced orthodontist with a focus on braces and clear aligners. She is committed to providing personalized treatment plans for patients of all ages.',
        fees: 75,
        address: {
            line1: '10th Avenue, Bright Lane',
            line2: 'Sunset Park, Miami'
        }
    },
    {
        _id: 'doc22',
        name: 'Dr. Robert Harris',
        image: doc22,
        speciality: 'Orthopedic Surgeon',
        degree: 'MBBS, MS Orthopedics',
        experience: '15 Years',
        about: 'Dr. Robert Harris is a highly experienced orthopedic surgeon specializing in joint replacement and sports injuries. He is dedicated to restoring mobility and improving the quality of life for his patients.',
        fees: 200,
        address: {
            line1: '18th Street, Health Lane',
            line2: 'MediCity, Houston'
        }
    },
    {
        _id: 'doc23',
        name: 'Dr. Laura Clark',
        image: doc23,
        speciality: 'Orthopedic Surgeon',
        degree: 'MBBS, DNB Orthopedics',
        experience: '12 Years',
        about: 'Dr. Laura Clark specializes in spine surgery and minimally invasive orthopedic procedures. She is committed to providing advanced surgical solutions with a focus on patient recovery and comfort.',
        fees: 180,
        address: {
            line1: '25th Cross, Wellness Road',
            line2: 'Green Valley, Dallas'
        }
    },
    {
        _id: 'doc24',
        name: 'Dr. Daniel White',
        image: doc24,
        speciality: 'Orthopedic Surgeon',
        degree: 'MBBS, FRCS Orthopedics',
        experience: '10 Years',
        about: 'Dr. Daniel White is an expert in trauma and fracture management. He is passionate about delivering timely and effective surgical care to help patients regain their strength and functionality.',
        fees: 170,
        address: {
            line1: '30th Avenue, Recovery Lane',
            line2: 'Sunrise Park, Phoenix'
        }
    },
    {
        _id: 'doc25',
        name: 'Dr. Emily Taylor',
        image: doc25,
        speciality: 'Pediatrician',
        degree: 'MBBS, MD Pediatrics',
        experience: '8 Years',
        about: 'Dr. Emily Taylor is a compassionate pediatrician with expertise in child health and development. She is dedicated to providing comprehensive care for infants, children, and adolescents, focusing on preventive health and early intervention.',
        fees: 90,
        address: {
            line1: '14th Street, Happy Lane',
            line2: 'Kidstown, Seattle'
        }
    },
]