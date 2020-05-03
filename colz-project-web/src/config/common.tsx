let env = {
    'local': {
      'rest_url': 'http://localhost:5000',
      'redirect_url': 'http://localhost:3000',
      'title': 'local'
    },
  };

    // export config
    export const config = () => {
      // console.log(env['local']);
      return env['local'] ;
    };