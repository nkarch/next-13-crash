import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

const fetchRepos = async () => {
    const res = await fetch("https://api.github.com/users/nkarch/repos", {
        next: {
            revalidate: 60,
        },
    });
    const repos = await res.json();
    return repos;
};

const ReposPage = async () => {
    const repos = await fetchRepos();

    return (
        <div className='repos-container'>
            <h2>Repositories</h2>

            <p>
                Hi. Unrelated to the home page content, here's a list of my own public GitHub repos,
                fetched from the GitHub public api.
            </p>

            <ul className='repo-list'>
                {repos.map((repo) => (
                    <li key={repo.id}>
                        <Link href={`/code/repos/${repo.name}`}>
                            <h3>{repo.name}</h3>
                            <p>{repo.description}</p>
                            <div className='repo-details'>
                                <span>
                                    <FaStar />
                                    {repo.stargazers_count}
                                </span>
                                <span>
                                    <FaCodeBranch />
                                    {repo.forks_count}
                                </span>
                                <span>
                                    <FaEye />
                                    {repo.watchers_count}
                                </span>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default ReposPage;
