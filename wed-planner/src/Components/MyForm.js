import { Button, Form } from 'react-bootstrap';
import { Formik } from "formik";
import * as yup from "yup";

export default function MyForm({updateList}){
    const schema = yup.object().shape({
        firstName: yup.string().required("Please add a first name!"),
        lastName: yup.string().required("Please add a last name!"),
        email: yup.string().email().required("Please add an email!"),
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
                        firstName: "",
                        lastName: "",
                        email: "",
                        phone: "",
                        street: "",
                        postal: "",
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
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            placeholder=""
                                            name="firstName"
                                            value={values.firstName}
                                            onChange={handleChange}
                                            isValid={touched.firstName && !errors.firstName}
                                            isInvalid={!!errors.firstName} 
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.firstName}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </div>
                                <div className='col-3'>
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="" 
                                            name="lastName"
                                            value={values.lastName}
                                            onChange={handleChange}
                                            isValid={touched.lastName && !errors.lastName}
                                            isInvalid={!!errors.lastName}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.lastName}
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
                                        />
                                    </Form.Group>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-8'>
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label>Street</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="" 
                                            name="street"
                                            value={values.street}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                </div>
                                <div className='col-4'>
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label>Postal</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="" 
                                            name="postal"
                                            value={values.postal}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <Button variant="dark" type="submit" style={{marginRight: "15px", width: "130px"}}>
                                        Add Guest
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