/**
 * Methods for interacting with the DNS endpoints<br>
 * {@link https://www.vultr.com/api/#tag/dns}
 * @namespace dns
 */

import { ApiEndpoint } from '../types'

/**
 * List all DNS domains on the account.<br>
 * {@link https://www.vultr.com/api/#operation/list-dns-domains}
 * @function listDomains
 * @memberof dns
 * @instance
 */
export const listDomains: ApiEndpoint = {
  url: '/domains',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    per_page: { type: 'number' },
    cursor: { type: 'string' }
  }
}

/**
 * Create a DNS domain for the specified domain. If no IP address is
 * specified, a domain with no records will be created.<br>
 * {@link https://www.vultr.com/api/#operation/create-dns-domain}
 * @function createDomain
 * @memberof dns
 * @instance
 */
export const createDomain: ApiEndpoint = {
  url: '/domains',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    domain: {
      type: 'string',
      required: true
    },
    ip: { type: 'string' },
    dns_sec: { type: 'string' }
  }
}

/**
 * Get information for the specified DNS domain.<br>
 * {@link https://www.vultr.com/api/#operation/get-dns-domain}
 * @function getDomain
 * @memberof dns
 * @instance
 */
export const getDomain: ApiEndpoint = {
  url: '/domains/{dns-domain}',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'dns-domain': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Delete the specified DNS domain.<br>
 * {@link https://www.vultr.com/api/#operation/delete-dns-domain}
 * @function deleteDomain
 * @memberof dns
 * @instance
 */
export const deleteDomain: ApiEndpoint = {
  url: '/domains/{dns-domain}',
  requestType: 'DELETE',
  apiKeyRequired: true,
  parameters: {
    'dns-domain': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Update the specified DNS domain to enable or disable DNS security.<br>
 * {@link https://www.vultr.com/api/#operation/update-dns-domain}
 * @function updateDomain
 * @memberof dns
 * @instance
 */
export const updateDomain: ApiEndpoint = {
  url: '/domains/{dns-domain}',
  requestType: 'PUT',
  apiKeyRequired: true,
  parameters: {
    'dns-domain': {
      type: 'string',
      path: true,
      required: true
    },
    dns_sec: {
      type: 'string',
      required: true
    }
  }
}

/**
 * Get SOA information for the specified DNS domain.<br>
 * {@link https://www.vultr.com/api/#operation/get-dns-domain-soa}
 * @function getSoaInfo
 * @memberof dns
 * @instance
 */
export const getSoaInfo: ApiEndpoint = {
  url: '/domains/{dns-domain}/soa',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'dns-domain': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Update SOA information for the specified DNS domain.<br>
 * {@link https://www.vultr.com/api/#operation/update-dns-domain-soa}
 * @function updateSoaInfo
 * @memberof dns
 * @instance
 */
export const updateSoaInfo: ApiEndpoint = {
  url: '/domains/{dns-domain}/soa',
  requestType: 'PATCH',
  apiKeyRequired: true,
  parameters: {
    'dns-domain': {
      type: 'string',
      path: true,
      required: true
    },
    nsprimary: { type: 'string' },
    email: { type: 'string' }
  }
}

/**
 * Get the DNSSEC information for the specified DNS domain.<br>
 * {@link https://www.vultr.com/api/#operation/get-dns-domain-dnssec}
 * @function getDnsSecInfo
 * @memberof dns
 * @instance
 */
export const getDnsSecInfo: ApiEndpoint = {
  url: '/domains/{dns-domain}/dnssec',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'dns-domain': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Create a new DNS record.<br>
 * {@link https://www.vultr.com/api/#operation/create-dns-domain-record}
 * @function createRecord
 * @memberof dns
 * @instance
 */
export const createRecord: ApiEndpoint = {
  url: '/domains/{dns-domain}/records',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    'dns-domain': {
      type: 'string',
      path: true,
      required: true
    },
    name: {
      type: 'string',
      required: true
    },
    type: {
      type: 'string',
      required: true
    },
    data: {
      type: 'string',
      required: true
    },
    ttl: { type: 'number' },
    priority: { type: 'number' }
  }
}

/**
 * List all DNS records.<br>
 * {@link https://www.vultr.com/api/#operation/list-dns-domain-records}
 * @function listRecords
 * @memberof dns
 * @instance
 */
export const listRecords: ApiEndpoint = {
  url: '/domains/{dns-domain}/records',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'dns-domain': {
      type: 'string',
      path: true,
      required: true
    },
    per_page: { type: 'number' },
    cursor: { type: 'string' }
  }
}

/**
 * Get the specified DNS record for the specified DNS domain.<br>
 * {@link https://www.vultr.com/api/#operation/get-dns-domain-record}
 * @function getRecord
 * @memberof dns
 * @instance
 */
export const getRecord: ApiEndpoint = {
  url: '/domains/{dns-domain}/records/{record-id}',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'dns-domain': {
      type: 'string',
      path: true,
      required: true
    },
    'record-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Update information for the specified DNS record.<br>
 * {@link https://www.vultr.com/api/#operation/update-dns-domain-record}
 * @function updateRecord
 * @memberof dns
 * @instance
 */
export const updateRecord: ApiEndpoint = {
  url: '/domains/{dns-domain}/records/{record-id}',
  requestType: 'PATCH',
  apiKeyRequired: true,
  parameters: {
    'dns-domain': {
      type: 'string',
      path: true,
      required: true
    },
    'record-id': {
      type: 'string',
      path: true,
      required: true
    },
    name: { type: 'string' },
    data: { type: 'string' },
    ttl: { type: 'string' },
    priority: { type: 'string' }
  }
}

/**
 * Delete a specified DNS record.<br>
 * {@link https://www.vultr.com/api/#operation/delete-dns-domain-record}
 * @function deleteRecord
 * @memberof dns
 * @instance
 */
export const deleteRecord: ApiEndpoint = {
  url: '/domains/{dns-domain}/records/{record-id}',
  requestType: 'DELETE',
  apiKeyRequired: true,
  parameters: {
    'dns-domain': {
      type: 'string',
      path: true,
      required: true
    },
    'record-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}
