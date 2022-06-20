import { Button, Form } from 'react-bootstrap';
import { Formik } from "formik";
import * as yup from "yup";

export default function BForm({updateList}){
    const schema = yup.object().shape({
        bill: yup.string().required("Please add the bill name!"),
        cost: yup.number().required("Please add a cost!"),
        deadline: yup.date(),
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
                        bill: "",
                        cost: "",
                        deadline: "",
                        checked: false,
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
                                <div className='col-4'>
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control 
                                            type="text"
                                            placeholder=""
                                            name="bill"
                                            value={values.bill}
                                            onChange={handleChange}
                                            isValid={touched.bill && !errors.bill}
                                            isInvalid={!!errors.bill}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.bill}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </div>
                                <div className='col-4'>
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label>Cost</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="" 
                                            name="cost"
                                            value={values.cost}
                                            onChange={handleChange}
                                            isValid={touched.cost && !errors.cost}
                                            isInvalid={!!errors.cost}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.cost}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </div>
                                <div className='col-4'>
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label>Deadline</Form.Label>
                                        <Form.Control 
                                            type="date" 
                                            placeholder="" 
                                            name="deadline"
                                            value={values.deadline}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <Button variant="dark" type="submit" style={{marginRight: "15px", width: "130px"}}>
                                        Add Bill
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