import fetch from 'isomorphic-unfetch'

const River = ({ data, status }) =>
    status === 200 ? (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Class</th>
                    <th>Put In</th>
                    <th>Take Out</th>
                    <th>Location</th>
                    
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{data.name}</td>
                    <td>{data.description}</td>
                    <td>{data.class}</td>
                    <td>{data.putIn}</td>
                    <td>{data.takeOut}</td>
                    <td>{data.location}</td>
                </tr>
            </tbody>
        </table>
    ) : (
            <p>{data.message}</p>
        )

River.getInitialProps = async ({ query }) => {
    const response = await fetch(`http://localhost:3000/api/river/${query.id}`)

    const data = await response.json()
    return { data, status: response.status }
}

export default River