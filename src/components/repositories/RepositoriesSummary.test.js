import {screen, render} from '@testing-library/react';
import RepositoriesSummary from './RepositoriesSummary';

test('displays primary language of the repository', () => {
    const repository = {
        stargazers_count: 100,
        open_issues: 5,
        forks: 10,
        language: 'JavaScript'
    };

    render(<RepositoriesSummary repository={repository} />);

    const language = screen.getByText('JavaScript');

    expect(language).toBeInTheDocument();
})
