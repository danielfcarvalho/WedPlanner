import { Table, Form } from "react-bootstrap"

export default function BTable({BudgetList}) {
    return(
        <div>
            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>Bill</th>
                        <th>Cost</th>
                        <th>Deadline</th>
                        <th>Paid</th>
                    </tr>
                </thead>
                <tbody>
                    {BudgetList.map((guest, key) => (
                        <tr key={key}>
                            <td>{guest.bill}</td>
                            <td>{guest.cost}</td>
                            <td>{guest.deadline}</td>
                            <td>
                            <Form.Check 
                                type="checkbox"
                                id="status"
                            />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}