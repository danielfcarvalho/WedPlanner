import { Button, Form } from 'react-bootstrap';
import { Formik } from "formik";
import * as yup from "yup";

export default function SForm({updateList}){
    const schema = yup.object().shape({
        name: yup.string().required("Please add a name!"),
        email: yup.string().email().required("Please add an email!"),
        phone: yup.number().required("Please add a contact number!"),
        adress: yup.string().required("Please add an address!"),
    }); 

    return(
        <div>
            <Formik
                    validationSchema={schema}
                    onSubmit={(values, {resetForm}) => {
                        console.log(values);
                        resetForm();
                        updateList(values)
                    }}
                    initialValues={{
                        type: "",
                        name: "",
                        email: "",
                        phone: "",
                        adress: "",
                        link: ""
                    }}
                >
                    {({
                        handleSubmit,
                        handleChange,
                        handleBlur,
                        values,
                        touched,
                        isValid,
                        errors,
                        resetForm,
                    }) => (
                        <Form
                            noValidate 
                            onSubmit={handleSubmit}
                        >
                            <div className='row'>
                                <div className='col-3'>
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label>Type</Form.Label>
                                        <Form.Control 
                                            type="text"
                                            placeholder=""
                                            name="type"
                                            value={values.type}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                </div>
                                <div className='col-3'>
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="" 
                                            name="name"
                                            value={values.name}
                                            onChange={handleChange}
                                            isValid={touched.name && !errors.name}
                                            isInvalid={!!errors.name}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.name}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </div>
                                <div className='col-3'>
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control 
                                            type="email" 
                                            placeholder="" 
                                            name="email"
                                            value={values.email}
                                            onChange={handleChange}
                                            isValid={touched.email && !errors.email}
                                            isInvalid={!!errors.email}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.email}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </div>
                                <div className='col-3'>
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            placeholder=""
                                            name="phone"
                                            value={values.phone}
                                            onChange={handleChange}
                                            isValid={touched.phone && !errors.phone}
                                            isInvalid={!!errors.phone}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.phone}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-8'>
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="" 
                                            name="adress"
                                            value={values.adress}
                                            onChange={handleChange}
                                            isValid={touched.adress && !errors.adress}
                                            isInvalid={!!errors.adress}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.adress}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </div>
                                <div className='col-4'>
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label>Link</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="" 
                                            name="link"
                                            value={values.link}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <Button variant="dark" type="submit" style={{marginRight: "15px", width: "130px"}}>
                                        Add Service
                                    </Button>
                                    <Button variant="light" type="reset" style={{width: "130px"}} onClick={resetForm}>
                                        Clear
                                    </Button>
                                </div>
                            </div>
                            
                        </Form>
                    )}
            </Formik>
        </div>
    )
}