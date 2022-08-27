import BorderlessButton from './../buttons/BorderlessButton/BorderlessButton';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
    return (
        <div className="card-project">
            <div className="row">
                <div className="col-4 p-0">
                    <img
                        src={project.img}
                        className="card-img-project"
                        alt={project.title}
                    />
                </div>
                <div className="col-8 project-description-container d-flex flex-column">
                    <p className="card-text mb-auto">
                        <b>{project.title}: </b>
                        {project.description}
                    </p>
                    <div className="row text-center">
                        <div className="col-6">
                            <a
                                href={project.link ? project.link : null}
                                target="_blank"
                                rel="noreferer"
                            >
                                <BorderlessButton
                                    text={'Website'}
                                    iconClass={'bi bi-display'}
                                    hoverIconClass={'bi bi-display-fill'}
                                    disabled={!project.link}
                                />
                            </a>
                        </div>
                        <div className="col-6">
                            <a
                                href={
                                    project.sourceCode
                                        ? project.sourceCode
                                        : null
                                }
                                target="_blank"
                                rel="noreferer"
                            >
                                <BorderlessButton
                                    text={'Source Code'}
                                    iconClass={'bi bi-code'}
                                    hoverIconClass={'bi bi-code-slash'}
                                    disabled={!project.link}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
