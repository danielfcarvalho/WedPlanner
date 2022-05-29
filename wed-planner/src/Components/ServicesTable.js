import { Table } from "react-bootstrap"

export default function STable({ServicesList}) {
    return(
        <div>
            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Adress</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody>
                    {ServicesList.map((guest, key) => (
                        <tr key={key}>
                            <td>{guest.type}</td>
                            <td>{guest.name}</td>
                            <td>{guest.email}</td>
                            <td>{guest.phone}</td>
                            <td>{guest.adress}</td>
                            <td>{guest.link}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}