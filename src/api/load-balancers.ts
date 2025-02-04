/**
 * Methods for interacting with the load balancer endpoints<br>
 * {@link https://www.vultr.com/api/#tag/load-balancer}
 * @namespace loadBalancers
 */

import { ApiEndpoint } from '../types'

/**
 * List all load balancers on the account.<br>
 * {@link https://www.vultr.com/api/#operation/list-load-balancers}
 * @function listLoadBalancers
 * @memberof loadBalancers
 * @instance
 */
export const listLoadBalancers: ApiEndpoint = {
  url: '/load-balancers',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    per_page: { type: 'string' },
    cursor: { type: 'string' }
  }
}

/**
 * Create a load balancer on the account.<br>
 * {@link https://www.vultr.com/api/#operation/create-load-balancer}
 * @function createLoadBalancer
 * @memberof loadBalancers
 * @instance
 */
export const createLoadBalancer: ApiEndpoint = {
  url: '/load-balancers',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    region: {
      type: 'string',
      required: true
    },
    balancing_algorithm: { type: 'string' },
    ssl_redirect: { type: 'boolean' },
    http2: { type: 'boolean' },
    nodes: { type: 'number' },
    proxy_protocol: { type: 'boolean' },
    health_check: { type: 'object' },
    forwarding_rules: { type: 'array' },
    sticky_session: { type: 'object' },
    ssl: { type: 'object' },
    label: { type: 'string' },
    instances: { type: 'array' },
    firewall_rules: { type: 'array' },
    vpc: { type: 'string' }
  }
}

/**
 * Get information about the specified load balancer.<br>
 * {@link https://www.vultr.com/api/#operation/get-load-balancer}
 * @function getLoadBalancer
 * @memberof loadBalancers
 * @instance
 */
export const getLoadBalancer: ApiEndpoint = {
  url: '/load-balancers/{load-balancer-id}',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'load-balancer-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Update information for the specified load balancer.<br>
 * {@link https://www.vultr.com/api/#operation/update-load-balancer}
 * @function updateLoadBalancer
 * @memberof loadBalancers
 * @instance
 */
export const updateLoadBalancer: ApiEndpoint = {
  url: '/load-balancers/{load-balancer-id}',
  requestType: 'PATCH',
  apiKeyRequired: true,
  parameters: {
    'load-balancer-id': {
      type: 'string',
      path: true,
      required: true
    },
    ssl: { type: 'object' },
    sticky_session: { type: 'object' },
    forwarding_rules: { type: 'array' },
    health_check: { type: 'object' },
    proxy_protocol: { type: 'boolean' },
    ssl_redirect: { type: 'boolean' },
    http2: { type: 'boolean' },
    nodes: { type: 'number' },
    balancing_algorithm: { type: 'string' },
    instances: { type: 'array' },
    label: { type: 'string' },
    vpc: { type: 'string' },
    firewall_rules: { type: 'array' }
  }
}

/**
 * Delete the specified load balancer.<br>
 * {@link https://www.vultr.com/api/#operation/delete-load-balancer}
 * @function deleteLoadBalancer
 * @memberof loadBalancers
 * @instance
 */
export const deleteLoadBalancer: ApiEndpoint = {
  url: '/load-balancers/{load-balancer-id}',
  requestType: 'DELETE',
  apiKeyRequired: true,
  parameters: {
    'load-balancer-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * List all forwarding rules for the specified load balancer.<br>
 * {@link https://www.vultr.com/api/#operation/list-load-balancer-forwarding-rules}
 * @function listForwardingRules
 * @memberof loadBalancers
 * @instance
 */
export const listForwardingRules: ApiEndpoint = {
  url: '/load-balancers/{load-balancer-id}/forwarding-rules',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'load-balancer-id': {
      type: 'string',
      path: true,
      required: true
    },
    per_page: { type: 'string' },
    cursor: { type: 'string' }
  }
}

/**
 * Create a forwarding rule for the specified forwarding rule.<br>
 * {@link https://www.vultr.com/api/#operation/create-load-balancer-forwarding-rules}
 * @function createForwardingRule
 * @memberof loadBalancers
 * @instance
 */
export const createForwardingRule: ApiEndpoint = {
  url: '/load-balancers/{load-balancer-id}/forwarding-rules',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    'load-balancer-id': {
      type: 'string',
      path: true,
      required: true
    },
    frontend_protocol: {
      type: 'string',
      required: true
    },
    frontend_port: {
      type: 'string',
      required: true
    },
    backend_protocol: {
      type: 'string',
      required: true
    },
    backend_port: {
      type: 'string',
      required: true
    }
  }
}

/**
 * Get information on the specified forwarding rule for the specified load balancer.<br>
 * {@link https://www.vultr.com/api/#operation/get-load-balancer-forwarding-rule}
 * @function getForwardingRule
 * @memberof loadBalancers
 * @instance
 */
export const getForwardingRule: ApiEndpoint = {
  url: '/load-balancers/{load-balancer-id}/forwarding-rules/{forwarding-rule-id}',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'load-balancer-id': {
      type: 'string',
      path: true,
      required: true
    },
    'forwarding-rule-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Delete the specified forwarding rule on the specified load balancer.<br>
 * {@link https://www.vultr.com/api/#operation/delete-load-balancer-forwarding-rule}
 * @function deleteForwardingRule
 * @memberof loadBalancers
 * @instance
 */
export const deleteForwardingRule: ApiEndpoint = {
  url: '/load-balancers/{load-balancer-id}/forwarding-rules/{forwarding-rule-id}',
  requestType: 'DELETE',
  apiKeyRequired: true,
  parameters: {
    'load-balancer-id': {
      type: 'string',
      path: true,
      required: true
    },
    'forwarding-rule-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * List the firewall rules for the specified load balancer.<br>
 * {@link https://www.vultr.com/api/#operation/list-loadbalancer-firewall-rules}
 * @function listFirewallRules
 * @memberof loadBalancers
 * @instance
 */
export const listFirewallRules: ApiEndpoint = {
  url: '/load-balancers/{load-balancer-id}/firewall-rules',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'load-balancer-id': {
      type: 'string',
      path: true,
      required: true
    },
    per_page: { type: 'string' },
    cursor: { type: 'string' }
  }
}

/**
 * Get information on the specified firewall rule for the specified load balancer.<br>
 * {@link https://www.vultr.com/api/#operation/get-loadbalancer-firewall-rule}
 * @function getFirewallRule
 * @memberof loadBalancers
 * @instance
 */
export const getFirewallRule: ApiEndpoint = {
  url: '/load-balancers/{load-balancer-id}/firewall-rules/{firewall-rule-id}',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'load-balancer-id': {
      type: 'string',
      path: true,
      required: true
    },
    'firewall-rule-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}
