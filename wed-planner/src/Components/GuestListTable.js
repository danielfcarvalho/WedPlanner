import { Table } from "react-bootstrap"

export default function GLTable({GuestList}) {
    return(
        <div>
            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Postal</th>
                    </tr>
                </thead>
                <tbody>
                    {GuestList.map((guest, key) => (
                        <tr key={key}>
                            <td>{guest.firstName} {guest.lastName}</td>
                            <td>{guest.email}</td>
                            <td>{guest.phone}</td>
                            <td>{guest.street}</td>
                            <td>{guest.postal}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}