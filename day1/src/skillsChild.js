function Skillss (props){
const {mySkills}=props ;
    return(
<>
<table className="table table-dark">
                            {mySkills.map((skill) =>{return<tbody>
                                <tr>
                                    <td className="w-25">{skill.namee}</td>
                                    <td>   <div className="progress w-50">
                                        <div className="progress-bar" role="progressbar" style={{width: `${skill.range}%` }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>   </td>
                                </tr>
                            </tbody>})}
                        </table>
</>
    );
}
export default Skillss