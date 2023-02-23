import { SKILLS_DATA } from './main';
import SkillsTableRow from './SkillsTableRow';

export default function Skills() {
    return (
        <div className="min-h-screen hero" id="skills">
            <div className="text-center hero-content">
                <div className="max-w-sm md:max-w-xl lg:max-w-5xl">
                    <h1 className="text-5xl font-bold">{SKILLS_DATA.title}</h1>
                    <p className="py-6">{SKILLS_DATA.description}</p>
                    <div className="overflow-x-auto">
                        <table className="table w-full overflow-x-auto table-normal">
                            <tbody>
                                {SKILLS_DATA.table.map(item => (
                                    <SkillsTableRow title={item.name}>
                                        {item.description}
                                    </SkillsTableRow>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
