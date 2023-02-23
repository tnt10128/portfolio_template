export default function SkillsTableRow(props) {
    return (
        <tr>
            <td className="bg-base-200">{props.title}</td>
            <td className="bg-base-300">{props.children}</td>
        </tr>
    );
}
