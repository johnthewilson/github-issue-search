
  
  type PullRequest = {
    url: string;
    html_url: string;
    diff_url: string;
    patch_url: string;
    merged_at: string;
  };
  
  type Issue = {
    id: number;
    node_id: string;
    url: string;
    repository_url: string;
    labels_url: string;
    comments_url: string;
    events_url: string;
    html_url: string;
    number: number;
    state: string;
    title: string;
    body: string;
    locked: boolean;
    active_lock_reason: string;
    comments: number;
    pull_request: PullRequest;
    closed_at: string | null;
    created_at: string;
    updated_at: string;
    author_association: string;
    state_reason: string;
  };