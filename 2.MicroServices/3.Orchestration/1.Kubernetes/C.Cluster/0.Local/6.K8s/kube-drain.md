% kubectl drain bellatrix --delete-local-data --ignore-daemonsets --force
node/bellatrix already cordoned
WARNING: ignoring DaemonSet-managed Pods: kube-system/calico-node-wknxr, kube-system/kube-proxy-v7kqk, openebs/openebs-ndm-5rrkt
evicting pod porter-system/porter-admission-patch-jfttt
evicting pod openebs/openebs-snapshot-operator-56bb984746-vfnl4
evicting pod default/orangehrm-1617227462-mariadb-0
evicting pod default/moodle-1616890389-mariadb-0
evicting pod openebs/cstor-disk-pool-2gpl-765fff776c-bcwpz
evicting pod porter-system/porter-admission-create-znzg6
evicting pod openebs/openebs-provisioner-5dfb8bc756-jrvjz
pod/porter-admission-create-znzg6 evicted
pod/porter-admission-patch-jfttt evicted
pod/openebs-snapshot-operator-56bb984746-vfnl4 evicted
pod/openebs-provisioner-5dfb8bc756-jrvjz evicted
pod/orangehrm-1617227462-mariadb-0 evicted
pod/moodle-1616890389-mariadb-0 evicted
pod/cstor-disk-pool-2gpl-765fff776c-bcwpz evicted
node/bellatrix evicted
