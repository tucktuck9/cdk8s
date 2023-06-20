package jenkinsio


// SecretRef specifies the secret to use for obtaining the StorageOS API credentials.
//
// If not specified, default values will be attempted.
type JenkinsSpecMasterVolumesStorageosSecretRef struct {
	// Name of the referent.
	//
	// More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
	Name *string `field:"optional" json:"name" yaml:"name"`
}

