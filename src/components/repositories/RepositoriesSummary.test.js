import {screen, render} from '@testing-library/react';
import RepositoriesSummary from './RepositoriesSummary';

test('displays information about the reepository', () => {
    const repository = {
        stargazers_count: 100,
        open_issues: 5,
        forks: 20,
        language: 'JavaScript'
    };

    render(<RepositoriesSummary repository={repository} />);

    for (let key in repository) {
        const value = repository[key];
        const element = screen.getByText(new RegExp(value));
        expect(element).toBeInTheDocument();
    }
})
