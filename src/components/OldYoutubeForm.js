import React from 'react'

// import { useFormik } from 'formik'
import { Formik,Form, Field, ErrorMessage,FieldArray, FastField } from 'formik'

import * as Yup from 'yup'

import TextError from './TextError'

const initialValues = {
    name: 'yeremia',
    email: '',
    channel: '',
    address: '',
    social: {
        facebook: '',
        twitter: ''
    },
    phoneNumber: ['',''],
    phNumber: [''],
    comment: ''
    // nama di atas harus sesuai dengan name pada field input 
}

const onSubmit = values => {
    console.log('form data', values)    
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
    channel: Yup.string().required('Required'),

    comment: Yup.string().required('required')
})

const validateComment = value => {
    let error
    if (!value){
        error='required'
    }
}


function OldYoutubeForm() {

    // const formik = useFormik({
    //     initialValues,
    //     onSubmit,
    //     // validate
    //     validationSchema


    //     // initialValues : {
    //     //     name: '',
    //     //     email: '',
    //     //     channel: ''
    //     //     // nama di atas harus sesuai dengan name pada field input 
    //     // },
    //     // onSubmit: values => {
    //     //     console.log('form data',values);
    //     // },
    //     // validate: values => {


    //     //     let errors = {}

    //     //     // ada3 kondisi:


    //     //     // values di error harus sama dengan namenya

    //     //     if (!values.name) {
    //     //         errors.name = 'Required'
    //     //     }
    //     //     if (!values.email) {
    //     //         errors.email = 'Required'
    //     //     } else if (!/^ ([a - zA - Z0 -9_\-\.] +)@([a - zA - Z0 -9_\-\.] +) \.([a - zA - Z]{ 2, 5})$/i.test(values.email)) {
    //     //         // jika tidak sesuai dengan regular expretion diatas maka tidak valid error,regex cari google aja.
    //     //         errors.email = 'invalid email format'
    //     //     }
    //     //     if (!values.channel) {
    //     //         errors.channel = 'Required'
    //     //     }
    //     // }

    //     // argument itu akan secara otomatis menerimaa form state sebagai argument
    //     // values itu sama seperti formik.values itu
    // })

    // console.log('form values', formik.errors);
    // console.log('form values', formik.touched);
    // formik.values itu memberikan kita setiap data2nya    
  
    return (
        <Formik initialValues={initialValues} 
                onSubmit={onSubmit} 
                validationSchema={validationSchema} 
                validateOnMount>
            {/* method itu adalah dari formik untuk menghendle form submition */}
            {
                formik => {
                    console.log('formik props', formik);
                    return (
                        <Form >
                            <label htmlFor="name">Name</label>
                            {/* properti onchange,onblur dan value itu bisa kita ganti dengan getfieldprops */}
                            {/* <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} /> */}
                            <Field type="text" id="name" name="name" />
                            {/* formik.touched itu untuk tau field mana yang kita kunjungi */}
                            {/* maksud dari logika itu adalah kita div itu akan ditampilkan jika ada error dan di kunjungi */}
                            {/* {formik.touched.name && formik.errors.name ? <div>salah</div> : null} */}
                            <ErrorMessage name='name' component={TextError} />
                            <label htmlFor="email">Email</label>
                            <Field type="text" id="email" name="email" />
                            {/* {formik.touched.email && formik.errors.email ? <div>salah</div> : null} */}
                            <ErrorMessage name='email' >
                                {
                                    (errorMsg) => <div>{errorMsg}</div>
                                }
                            </ErrorMessage>
                            <label htmlFor="channel">Channel</label>
                            <Field type="text" id="channel" name="channel" /*{...formik.getFieldProps('channel')}*/ />
                            {/* {formik.touched.channel && formik.errors.channel ? <div>salah</div> : null} */}
                            {/* formik handleChange itu adalah formik helper to update the values object jadi method itu untuk read name attribute dan update responding properti di values nya*/}
                            <ErrorMessage name='channel' />

                            <label htmlFor="address">Adress</label>
                            <Field name="address">
                                {
                                    (props) => {
                                        const { fields, form, meta } = props
                                        // console.log  (props);
                                        // itu kalo kita log isinya sangat banyak
                                        return (
                                            <div>
                                                <input type="text" id="address" {...fields} />
                                                {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                                            </div>
                                        )
                                    }
                                }
                            </Field>

                            <label htmlFor="facebook">Facebook</label>
                            <Field type="Text" id="facebook" name="social.facebook" />
                            <label htmlFor="twitter">Twitter</label>
                            <Field type="Text" id="twitter" name="social.twitter" />
                            <button type="submit">submit</button>

                            <label htmlFor="phonenumberone">no1</label>
                            <Field type="Text" id="phonenumberone" name="phoneNumber[0]" />
                            <label htmlFor="phonenumbertwo">no1</label>
                            <Field type="Text" id="phonenumbertwo" name="phoneNumber[1]" />
                            <label htmlFor="comment">comment</label>
                            <Field as="textarea" id="comment" name="comment" validate={validateComment  }  />    
                            <ErrorMessage name="comment"/>

                            <label >list of phone number</label>
                            <FieldArray name="phNumber">
                                {
                                    (fieldArrayProps) => {


                                        const { push, remove, form } = fieldArrayProps
                                        const { values } = form
                                        // console.log('field array props', fieldArrayProps);
                                        const { phNumber } = values
                                        return (
                                            <div>
                                                {
                                                    phNumber.map((phNumber, index) => (
                                                        <div key={index}>
                                                            <Field name={`phNumbers${index}`} />

                                                            {
                                                                index > 0 && (
                                                                    <button type='button' onClick={(index) => remove(index)}>-</button>
                                                                )
                                                            }
                                                            <button type='button' onClick={() => push('')}>+</button>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        )
                                    }
                                }
                            </FieldArray>
                            
                                        {/* validateField itu dalamnya adalah nama fieldnya yang mau di validate */}
                            <button type="submit" onClick={() => formik.validateField('comment') }>Validate Comment</button>
                            <button type="submit" onClick={() => formik.validateForm()}>Validate all</button>
                            <button type="submit" onClick={() => formik.setFieldTouched('comment')}>visits Comment</button>
                            <button type="submit" onClick={() => formik.setTouched({
                                name: true,
                                email: true,
                                channel: true,
                                comment: true   
                            })}>visit field</button>
                            <button type="submit" disabled={!formik.isValid}>submit</button>
                                {/* button di disable jika datanya tidak valid dengan props disabled */}
                                {/* isValid bernilai True jika errorsnya kosong */}

                        </Form>
                    )
                }
            }
            
        </Formik>
    )
}

export default OldYoutubeForm
