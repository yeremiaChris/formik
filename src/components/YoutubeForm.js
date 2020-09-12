import React from 'react'

import {useFormik} from 'formik' 

import * as Yup from 'yup'



const initialValues = {
    name: 'yeremia',
    email: '',
    channel: ''
    // nama di atas harus sesuai dengan name pada field input 
}

const onSubmit = values => {
    console.log('form data', values);
}

// const validate = values => {


//     let errors = {}

//     // ada3 kondisi:


//     // values di error harus sama dengan namenya

//     if (!values.name) {
//         errors.name = 'Required'
//     }
//     if (!values.email) {
//         errors.email = 'Required'
//     } else if (!/^ ([a - zA - Z0 -9_\-\.] +)@([a - zA - Z0 -9_\-\.] +) \.([a - zA - Z]{ 2, 5})$/i.test(values.email)) {
//         // jika tidak sesuai dengan regular expretion diatas maka tidak valid error,regex cari google aja.
//         errors.email = 'invalid email format'
//     }
//     if (!values.channel) {
//         errors.channel = 'Required'
//     }

//     return errors
// }

const validationSchema = Yup.object({
    // isinya adalah rule atau aturan dari form field kita
    name: Yup.string().required('Required'),
    email: Yup.string().email('invalid email format').required('required'),
    channel: Yup.string().required('Required') 
})



function YoutubeForm() {

    const formik = useFormik({
        initialValues,
        onSubmit,
        // validate
        validationSchema    


        // initialValues : {
        //     name: '',
        //     email: '',
        //     channel: ''
        //     // nama di atas harus sesuai dengan name pada field input 
        // },
        // onSubmit: values => {
        //     console.log('form data',values);
        // },
        // validate: values => {


        //     let errors = {}

        //     // ada3 kondisi:


        //     // values di error harus sama dengan namenya

        //     if (!values.name) {
        //         errors.name = 'Required'
        //     }
        //     if (!values.email) {
        //         errors.email = 'Required'
        //     } else if (!/^ ([a - zA - Z0 -9_\-\.] +)@([a - zA - Z0 -9_\-\.] +) \.([a - zA - Z]{ 2, 5})$/i.test(values.email)) {
        //         // jika tidak sesuai dengan regular expretion diatas maka tidak valid error,regex cari google aja.
        //         errors.email = 'invalid email format'
        //     }
        //     if (!values.channel) {
        //         errors.channel = 'Required'
        //     }
        // }

        // argument itu akan secara otomatis menerimaa form state sebagai argument
        // values itu sama seperti formik.values itu
    })

    // console.log('form values', formik.errors);
    console.log('form values', formik.touched);
    // formik.values itu memberikan kita setiap data2nya    

    return (
        <div>
            {/* method itu adalah dari formik untuk menghendle form submition */}
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur}/>
                {/* formik.touched itu untuk tau field mana yang kita kunjungi */}
                {/* maksud dari logika itu adalah kita div itu akan ditampilkan jika ada error dan di kunjungi */}
                {formik.touched.name && formik.errors.name ? <div>salah</div> : null }
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur}/>
                {formik.touched.email && formik.errors.email ? <div>salah</div> : null}
                <label htmlFor="channel">Channel</label>
                <input type="text" id="channel" name="channel" onChange={formik.handleChange} value={formik.values.channel} onBlur={formik.handleBlur}/>
                {formik.touched.channel && formik.errors.channel ? <div>salah</div> : null}
                {/* formik handleChange itu adalah formik helper to update the values object jadi method itu untuk read name attribute dan update responding properti di values nya*/}
                <button type="submit">submit</button>
            </form> 
        </div>
    )
}

export default YoutubeForm
