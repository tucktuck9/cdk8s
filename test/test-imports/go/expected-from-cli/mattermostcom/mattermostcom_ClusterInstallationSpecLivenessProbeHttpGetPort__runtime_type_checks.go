//go:build !no_runtime_type_checking
// +build !no_runtime_type_checking

// mattermostcom
package mattermostcom

import (
	"fmt"
)

func validateClusterInstallationSpecLivenessProbeHttpGetPort_FromNumberParameters(value *float64) error {
	if value == nil {
		return fmt.Errorf("parameter value is required, but nil was provided")
	}

	return nil
}

func validateClusterInstallationSpecLivenessProbeHttpGetPort_FromStringParameters(value *string) error {
	if value == nil {
		return fmt.Errorf("parameter value is required, but nil was provided")
	}

	return nil
}

